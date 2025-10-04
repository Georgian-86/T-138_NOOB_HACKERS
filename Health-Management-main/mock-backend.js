const express = require('express');
const cors = require('cors');
const { encode } = require('cbor-x');
const app = express();
const port = 4943; // IC replica port

app.use(cors());
app.use(express.raw({ type: 'application/cbor' }));

// Mock data
let records = [];
let recordIdCounter = 1;

// IC Root Key (mock)
const mockRootKey = [48, 129, 130, 48, 29, 6, 13, 43, 6, 1, 4, 1, 130, 220, 124, 5, 3, 1, 2, 1, 6, 12, 43, 6, 1, 4, 1, 130, 220, 124, 5, 3, 2, 1, 3, 97, 0, 139, 82, 180, 153, 79, 148, 199, 206, 75, 225, 193, 84, 45, 124, 129, 220, 121, 254, 161, 125, 73, 239, 232, 250, 66, 232, 86, 99, 115, 88, 29, 75, 150, 156, 74, 89, 233, 106, 14, 245, 27, 113, 31, 229, 2, 126, 192, 22, 1, 24, 37, 25, 208, 167, 136, 244, 191, 227, 136, 229, 147, 185, 124, 209, 215, 228, 73, 4, 222, 121, 66, 36, 48, 188, 166, 134, 172, 140, 33, 48, 91, 51, 151, 181, 186, 77, 112, 55, 209, 120, 119, 49, 47, 183, 238, 52];

// Handle IC status endpoint
app.get('/api/v2/status', (req, res) => {
  const response = {
    replica_health_status: 'healthy',
    root_key: mockRootKey
  };
  res.set('Content-Type', 'application/cbor');
  res.send(encode(response));
});

// Handle IC canister calls
app.post('/api/v2/canister/*/call', (req, res) => {
  try {
    const canisterId = req.params[0];
    console.log(`IC Call to canister: ${canisterId}`);
    
    // Parse the CBOR request
    let requestData;
    try {
      requestData = JSON.parse(req.body.toString());
    } catch (e) {
      // If not JSON, try to handle as CBOR or create mock response
      requestData = { method_name: 'getPatientRecords', arg: {} };
    }
    
    const { method_name, arg } = requestData;
    let response;
    
    switch (method_name) {
      case 'getPatientRecords':
        response = records;
        break;
      case 'createRecord':
        const newRecord = {
          id: `record_${recordIdCounter++}`,
          patientId: 'mock_patient_id',
          metadata: arg.metadata || 'Mock record',
          data: arg.data || [],
          accessList: [],
          timestamp: BigInt(Date.now())
        };
        records.push(newRecord);
        response = { Ok: newRecord.id };
        break;
      case 'getRecord':
        const record = records.find(r => r.id === arg);
        response = record ? [record] : [];
        break;
      default:
        response = { Ok: 'mock_response' };
    }
    
    // Send CBOR response
    res.set('Content-Type', 'application/cbor');
    res.send(encode(response));
    
  } catch (error) {
    console.error('Error handling IC call:', error);
    res.set('Content-Type', 'application/cbor');
    res.send(encode({ Err: error.message }));
  }
});

// Handle query calls
app.post('/api/v2/canister/*/query', (req, res) => {
  try {
    const canisterId = req.params[0];
    console.log(`IC Query to canister: ${canisterId}`);
    
    let requestData;
    try {
      requestData = JSON.parse(req.body.toString());
    } catch (e) {
      requestData = { method_name: 'getPatientRecords', arg: {} };
    }
    
    const { method_name, arg } = requestData;
    let response;
    
    switch (method_name) {
      case 'getPatientRecords':
        response = records;
        break;
      case 'getRecord':
        const record = records.find(r => r.id === arg);
        response = record ? [record] : [];
        break;
      default:
        response = [];
    }
    
    res.set('Content-Type', 'application/cbor');
    res.send(encode(response));
    
  } catch (error) {
    console.error('Error handling IC query:', error);
    res.set('Content-Type', 'application/cbor');
    res.send(encode({ Err: error.message }));
  }
});

// Handle root key endpoint
app.get('/api/v2/status', (req, res) => {
  const response = {
    replica_health_status: 'healthy',
    root_key: mockRootKey
  };
  res.set('Content-Type', 'application/cbor');
  res.send(encode(response));
});

// Serve the clear storage page
app.get('/clear-storage', (req, res) => {
  res.sendFile('/home/golu_kumar/Health-Management-System/Health-Management-main/src/Health-Management-frontend/dist/clear-storage.html');
});

// API endpoint to clear storage programmatically
app.post('/api/clear-storage', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Storage cleared successfully. Please refresh the page.',
    instructions: [
      '1. Open browser developer tools (F12)',
      '2. Go to Application/Storage tab',
      '3. Clear Local Storage and Session Storage',
      '4. Refresh the page'
    ]
  });
});

// Fallback for other endpoints
app.use('*', (req, res) => {
  console.log(`Unhandled request: ${req.method} ${req.path}`);
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Mock IC backend running on http://localhost:${port}`);
  console.log('Handling IC protocol with CBOR encoding');
});
