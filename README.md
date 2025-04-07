📞 CRM Application (MERN Stack)


Live:https://crm-frontend-edmn.onrender.com


Admin Credentials:


Username:admin@test.com


Password:123456



A Customer Relationship Management (CRM) system built using the MERN stack (MongoDB, Express, React, Node.js) designed for real-world use cases. The platform supports role-based access (Admin & Telecaller), lead management, authentication, and a clean modular structure for scalability.

🚀 Features
✅ Authentication & Authorization
JWT-based authentication

Separate login for Admin and Telecaller

Role-based dashboard and UI rendering

Secure route access with token protection

📋 Lead Management
Admins can:

Create leads

View all leads

Delete any lead

Telecallers can:

View assigned leads

Update call status (e.g., Interested, Not Interested, Follow-Up)

Add response notes

🧑‍💼 Role-Based UI
Custom UI components for Admin and Telecaller roles

Modular structure with separate pages for:

Admin Login

Telecaller Login

Register

Dashboard

Leads

📦 Tech Stack
Tech	Description
React	Frontend Framework
Node.js	Backend Runtime
Express	REST API framework
MongoDB	NoSQL Database
JWT	Authentication Tokens
Axios	API Communication
Vercel	Frontend Deployment
Render	Backend Deployment
🛠️ Project Structure
📁 Client (Frontend - React)
bash
Copy
Edit
/client
│
├── /src
│   ├── /pages
│   │   ├── Login.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── /components
│   │   └── LeadForm.jsx
│   │   └── LeadList.jsx
│
└── ...
📁 Server (Backend - Node.js + Express)
bash
Copy
Edit
/server
│
├── /controllers
│   └── authController.js
│   └── leadController.js
│
├── /routes
│   └── authRoutes.js
│   └── leadRoutes.js
│
├── /middleware
│   └── authMiddleware.js
│
└── /models
    └── User.js
    └── Lead.js


env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone
cd crm-app
2. Install dependencies
Backend
bash
Copy
Edit
cd server
npm install
Frontend
bash
Copy
Edit
cd client
npm install
3. Run the app
Backend
bash
Copy
Edit
npm run dev
Frontend
bash
Copy
Edit
npm start
🌐 Deployment
Frontend: Deployed on Vercel

Backend: Deployed on Render

✍️ Author
👤 Darshankumar G
