# CREDIT x Lexo
A website/application for Lexo an Exo-skeleton IoT device for patients with Osteoperosis or any Leg immobility disease
- Helps with retriving data from IoT device

## 1. Project Overview
Objective:
Develop a web and mobile application to store, manage, and display data collected from the Lexo leg exoskeleton IoT device equipped with a Raspberry Pi. The system should provide users with real-time data insights, historical data analysis, and device management capabilities.

## 2. System Architecture
### 2.1. Components

**Lexo IoT Device:**
Hardware: Lexo exoskeleton with Raspberry Pi.
Sensors: Motion sensors, force sensors, battery status, etc.
Connectivity: Wi-Fi/Bluetooth for data transmission.

**Backend Server:**
API Layer: RESTful or GraphQL APIs for communication.
Database: Store user data, device data, logs, etc.
Authentication & Authorization: Secure user access.
Data Processing: Real-time data handling and storage.

**Frontend Application:**
Web Application: Accessible via browsers.
Mobile Application: iOS and Android platforms.

**Cloud Services:**
Hosting: Cloud provider (e.g., AWS, Azure, Google Cloud).
Storage: For scalable data storage.
CI/CD Pipelines: Automated deployment processes.

### 2.2. Architecture Diagram
```
[Lexo Device] --> [Cloud (API Server)] --> [Database]
                                   |
                                   +--> [Web Application]
                                   |
                                   +--> [Mobile Application]
```

## 3. Technology Stack
### 3.1. Backend
Language: Python (Django/Flask) or Node.js (Express)<br>
Framework: Django REST Framework or Express.js<br>
Database: PostgreSQL (relational) or MongoDB (NoSQL)<br>
Real-time Communication: WebSockets or MQTT<br>
Authentication: OAuth 2.0 / JWT<br>
Hosting: AWS (EC2, Lambda), Azure, or Google Cloud Platform

### 3.2. Frontend
**Web Application:**<br>
Framework: React.js or Vue.js<br>
State Management: Redux or Vuex<br>
UI Libraries: Material-UI, Bootstrap, or Tailwind CSS<br>
Data Visualization: D3.js, Chart.js, or Recharts
<br>

**Mobile Application:**<br>
Framework: React Native or Flutter<br>
State Management: Redux (for React Native) or Provider/BLoC (for Flutter)<br>
UI Libraries: NativeBase, Material Design

### 3.3. IoT Device
Operating System: Raspbian OS<br>
Programming Language: Python or Node.js<br>
Libraries: GPIO libraries, MQTT clients<br>
Communication Protocol: MQTT over TLS for secure data transmission


## 4. Detailed Development Plan
### 4.1. Phase 1: Requirement Analysis & Planning

**Gather Requirements:**<br>
Define data points collected by Lexo.<br>
Determine user roles and permissions.<br>
Identify key features (real-time monitoring, historical data, alerts).<br>

**Create Specifications:**<br>
Technical specifications document.<br>
UI/UX wireframes and prototypes.

### 4.2. Phase 2: Backend Development

**Setup Development Environment:**<br>
Choose the backend framework.<br>
Initialize project repositories.<br>

**Database Design:**<br>
Define schemas for users, devices, sensor data, logs.<br>
Implement relational or NoSQL database accordingly.<br>

**API Development:**<br>

Develop RESTful or GraphQL APIs for:
- User authentication and management.
- Device registration and management.
- Data ingestion from Lexo.
- Data retrieval for frontend applications.
<br>
<br>

Real-time Data Handling:
- Implement WebSockets or MQTT for real-time updates.
Ensure scalability for multiple devices.
<br>
<br>

Security Implementations:
- Secure API endpoints.
- Implement data encryption in transit and at rest.
- Set up authentication and authorization mechanisms.

### 4.3. Phase 3: IoT Device Integration

**Raspberry Pi Setup:**
- Install necessary OS and dependencies.
- Configure network settings for connectivity.
<br>
<br>

**Data Collection Scripts:**
- Develop scripts to read sensor data.
- Ensure efficient data collection without draining device resources.
<br>
<br>

**Data Transmission:**
- Implement secure data transmission protocols (e.g., MQTT over TLS).
- Ensure reliable data sending with retry mechanisms.
<br>
<br>

**Device Management:**
- Allow firmware updates and remote diagnostics.
<br>
<br>

### 4.4. Phase 4: Frontend Development

### Web Application

#### UI Development
- Build responsive layouts.
- Implement navigation, dashboards, and data visualization components.

#### State Management
- Manage application state efficiently.

#### Integration with Backend
- Connect to backend APIs.
- Handle real-time data streams.

---

### Mobile Application

#### UI Development
- Design mobile-friendly interfaces.
- Ensure smooth navigation and interactions.

#### State Management
- Implement efficient state handling for mobile.

#### Integration with Backend
- Connect to backend APIs.
- Handle real-time data streams.

---

### 4.5. Phase 5: Testing

### Unit Testing
- **Backend**: Test API endpoints and data processing.
- **Frontend**: Test components and state management.

### Integration Testing
- Ensure seamless communication between frontend and backend.
- Test data flow from Lexo to the application.

### User Acceptance Testing (UAT)
- Gather feedback from potential users.
- Iterate based on feedback.

### Performance Testing
- Ensure the system can handle the expected load.
- Optimize for scalability.

---

### 4.6. Phase 6: Deployment

### Setup CI/CD Pipelines
- Automate testing and deployment processes.

### Deploy Backend
- Host on the chosen cloud provider.
- Ensure high availability and redundancy.

### Deploy Frontend Applications
- Host the web application on platforms like:
  - **Vercel**
  - **Netlify**
  - **AWS S3 with CloudFront**
- Publish mobile applications to:
  - **App Store**
  - **Google Play**

### Monitor & Maintain
- Implement monitoring tools such as:
  - **Prometheus**
  - **Grafana**
- Set up logging and alerting mechanisms.
