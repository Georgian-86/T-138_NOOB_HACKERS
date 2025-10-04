# Health Management System (Domain: HealthCare)

## 🔗 Live Demo

Health Management System:  https://p2x5t-yqaaa-aaaah-arcma-cai.icp0.io/#/project-details 
Presentation: https://chat.z.ai/space/s01dq8ucstz0-ppt


<div align="center">
  <p><em>A secure, intelligent platform for managing your healthcare records</em></p>
</div>

## 📋 Table of Contents
- [Live Demo](#live-demo)
- [Problem Statement](#problem-statement)
- [Our Solution](#our-solution).
- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [User Guide](#user-guide)
- [Acknowledgments](#acknowledgments)

- ## Team Information
- **Team Name**: NOOB HACKERS
- **Team ID**: T-138
- **University**: Lovely Professional University

## Team Members
- [Golu Kumar] - [Backend Developer] 
- [Medha Jha] - [AI Specialist] 
- [Ajay Gangwar] - [Blockchain Developer] 
- [Sarwajeet Singh] - [UI/UX Designer]
  
## Problem Statement - Open Innovation
In traditional healthcare systems, patient records are:
1. Scattered across multiple providers (hospitals, clinics, labs)
2. Stored in centralized databases, making them vulnerable to data breaches
3. Prone to tampering, loss, and lack of proper traceability
4. Difficult to access across institutions, especially during emergencies
5. Not fully owned or controlled by patients

These challenges create barriers in delivering timely, coordinated, and patient-centric care.

## 🌟 Problem Statement
In traditional healthcare systems, patient records are often:
  1. Scattered across multiple providers (hospitals, clinics, labs).
  2. Stored in centralized databases, making them vulnerable to data breaches.
  3. Prone to tampering, loss, and lack of proper traceability.
  4. Difficult to access across institutions, especially during emergencies or transfers.
  5. Not fully owned or controlled by patients, despite being about their health.
These challenges create barriers in delivering timely, coordinated, and patient-centric care.

## 💡 Our Solution
We present a Blockchain-Based Healthcare Management System that uses blockchain to securely store and manage patient health records in a decentralized, tamper-proof, and transparent manner.
Key Features:
  🔐 Immutability: Once added, medical records cannot be altered or deleted, ensuring data integrity.
  🌍 Decentralized Access: Authorized entities (doctors, labs, insurance providers) can access data without depending on a central authority.
  👥 Patient-Centric Ownership: Patients control access to their records through cryptographic keys and smart contracts.
  🧾 Auditability: Every transaction and access to medical data is logged and traceable.

  
## 🌟 Overview

Health Management System is a comprehensive platform built on the Internet Computer (IC) blockchain that empowers users to securely store, manage, and share their health records. With features like ABHA integration, AI-powered disease prediction, and an intuitive interface, it transforms how individuals interact with their healthcare data.

The application prioritizes security, privacy, and user experience while leveraging the decentralized benefits of the Internet Computer to ensure your health data remains under your control.

## 🔑 Key Features

### Core Functionality
- **📊 Secure Health Record Management**: Create, store, view, and manage all your health records in one place
- **🔄 Cross-Provider Data Sharing**: Securely share records with healthcare providers
- **🔐 Blockchain-Based Security**: Utilize Internet Computer's secure architecture for data protection
- **📱 Responsive Design**: Access your health data seamlessly across desktop and mobile devices

### Advanced Features
- **🇮🇳 ABHA Integration**: Connect with India's Ayushman Bharat Health Account system for national health ID compatibility
- **🧠 AI Disease Prediction**: Get preliminary diagnosis suggestions through our integrated AI assistant
- **🌓 Dark/Light Mode**: Customize your visual experience to reduce eye strain
- **📅 Appointment Tracking**: Manage your medical appointments and receive reminders
- **⚡ Offline Capability**: Access critical information even without an internet connection

### User Experience
- **🎨 Intuitive Interface**: Easy-to-navigate dashboard with visual health summaries
- **✨ Smooth Animations**: Polished user experience with Framer Motion animations
- **📊 Visual Data Representation**: View your health trends through interactive charts
- **🔔 Notification System**: Stay informed about important health updates

## 🛠️ Tech Stack

### Frontend
- **Framework**: React with TypeScript
- **UI Library**: Material-UI (MUI)
- **Animation**: Framer Motion
- **State Management**: React Context API
- **Styling**: Emotion (CSS-in-JS)

### Backend
- **Platform**: Internet Computer (IC)
- **Language**: Rust
- **Authentication**: Internet Identity
- **Data Storage**: Internet Computer Canisters

### DevOps
- **Build Tool**: DFX (DFINITY Canister SDK)
- **Package Manager**: npm
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [DFX](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove) (DFINITY Canister SDK v0.12.0 or higher)
- [Rust](https://www.rust-lang.org/tools/install) (for backend development)
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) (Rust package manager)


## 💻 Development

### Frontend Development

The frontend code is located in the `src/Health-Management-frontend` directory.

1. **Start the development server**:
   ```bash
   cd src/Health-Management-frontend
   npm run dev
   ```
   This will start a development server at http://localhost:8080 with hot-reloading.

2. **Build the frontend**:
   ```bash
   npm run build
   ```
   This creates optimized production files in the `dist` folder.

### Backend Development

The backend code is located in the `src/healthchain_backend` directory.

1. **Modify the Rust canister code** in `src/healthchain_backend/src/lib.rs`

2. **Update the Candid interface** after making changes:
   ```bash
   npm run generate
   ```

3. **Redeploy the backend**:
   ```bash
   dfx deploy healthchain_backend
   ```


## 📖 User Guide

### Setting Up Your Account

1. Open the application and click "Sign Up" or "Login" to authenticate using Internet Identity
2. Complete your profile information
3. Link your ABHA ID (optional)

### Managing Health Records

1. Click "Add New Record" on the dashboard
2. Fill in the required information about your health record
3. Attach any relevant documents or images
4. Save the record

### Using Disease Prediction

1. Click "Try Disease Prediction" on the dashboard
2. Enter your symptoms and health information
3. Review the AI-generated predictions
4. Share results with your healthcare provider if needed

## 🙏 Acknowledgments

- [DFINITY Foundation](https://dfinity.org/) for the Internet Computer platform
- [Material-UI](https://mui.com/) for the UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Ayushman Bharat Digital Mission](https://abdm.gov.in/) for ABHA specifications
- All contributors who have helped shape this project

---

<div align="center">
  <p>Made with ❤️ by the Health Management System Team</p>
</div>

Welcome to your new `Health-Management` project and to the Internet Computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with `Health-Management`, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Rust Canister Development Guide](https://internetcomputer.org/docs/current/developer-docs/backend/rust/)
- [ic-cdk](https://docs.rs/ic-cdk)
- [ic-cdk-macros](https://docs.rs/ic-cdk-macros)
- [Candid Introduction](https://internetcomputer.org/docs/current/developer-docs/backend/candid/)
