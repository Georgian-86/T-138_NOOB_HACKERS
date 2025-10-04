// Storage Manager for Health Management System
// This script helps manage browser storage and prevents quota exceeded errors

class StorageManager {
  constructor() {
    this.maxStorageSize = 5 * 1024 * 1024; // 5MB limit
    this.checkStorageHealth();
  }

  checkStorageHealth() {
    try {
      const currentSize = this.getStorageSize();
      if (currentSize > this.maxStorageSize) {
        this.handleStorageFull();
      }
    } catch (error) {
      console.warn('Storage check failed:', error);
    }
  }

  getStorageSize() {
    let totalSize = 0;
    
    // Check localStorage
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        totalSize += localStorage[key].length + key.length;
      }
    }
    
    // Check sessionStorage
    for (let key in sessionStorage) {
      if (sessionStorage.hasOwnProperty(key)) {
        totalSize += sessionStorage[key].length + key.length;
      }
    }
    
    return totalSize;
  }

  clearOldData() {
    try {
      // Clear old user profiles and large data
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (
          key.includes('userProfiles') || 
          key.includes('health') || 
          key.includes('ic-') ||
          key.includes('image') ||
          key.includes('upload')
        )) {
          keysToRemove.push(key);
        }
      }
      
      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
        console.log(`Cleared storage key: ${key}`);
      });
      
      return keysToRemove.length;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return 0;
    }
  }

  handleStorageFull() {
    console.warn('Storage quota exceeded! Clearing old data...');
    
    const clearedItems = this.clearOldData();
    
    if (clearedItems > 0) {
      console.log(`Cleared ${clearedItems} storage items`);
      
      // Show user notification
      this.showNotification(
        'Storage cleared!', 
        `Cleared ${clearedItems} old items to free up space.`,
        'success'
      );
    } else {
      // If still full, show manual clear option
      this.showNotification(
        'Storage Full!', 
        'Please clear your browser storage manually or use the clear storage tool.',
        'warning'
      );
    }
  }

  showNotification(title, message, type = 'info') {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#4CAF50' : type === 'warning' ? '#FF9800' : '#2196F3'};
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 10000;
      max-width: 300px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    notification.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 5px;">${title}</div>
      <div>${message}</div>
      <button onclick="this.parentElement.remove()" style="
        background: none;
        border: none;
        color: white;
        float: right;
        font-size: 18px;
        cursor: pointer;
        margin-top: 5px;
      ">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }

  // Method to safely store data with size checking
  safeSetItem(key, value) {
    try {
      const itemSize = key.length + value.length;
      const currentSize = this.getStorageSize();
      
      if (currentSize + itemSize > this.maxStorageSize) {
        // Clear some old data first
        this.clearOldData();
      }
      
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error('Failed to store data:', error);
      this.handleStorageFull();
      return false;
    }
  }
}

// Initialize storage manager
window.storageManager = new StorageManager();

// Override localStorage.setItem to add safety checks
const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
  try {
    originalSetItem.call(this, key, value);
  } catch (error) {
    if (error.name === 'QuotaExceededError') {
      console.warn('Storage quota exceeded, attempting to clear old data...');
      window.storageManager.handleStorageFull();
      
      // Try again after clearing
      try {
        originalSetItem.call(this, key, value);
      } catch (retryError) {
        console.error('Still unable to store data after clearing:', retryError);
        window.storageManager.showNotification(
          'Storage Error',
          'Unable to save data. Please clear your browser storage manually.',
          'warning'
        );
      }
    } else {
      throw error;
    }
  }
};

console.log('Storage Manager initialized');
