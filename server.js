require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

const app = express();
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',itemRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const dbURI = process.env.DB_URI;
const port = process.env.PORT || 4000;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
  .catch((err) => console.log(err));



// 🔹 1. EC2 pe connect ho (tu already ho)
// ssh -i your-key.pem ec2-user@your-ip

// - MOST COMMON ISSUE → Security Group
// AWS me ja:
// 👉 EC2 → Security Groups → Inbound Rules
// Ensure ye ports open hain:
// Type
// Port
// HTTP
// 80
// Custom TCP
// 3000
// Custom TCP
// 5000
// Custom TCP
// 5173
// 👉 Source: 0.0.0.0/0

// 🔹 2. System update + Node install
// sudo dnf update -y
// curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
// sudo dnf install -y nodejs git
// Check:
// node -v
// npm -v


// 🔹 3. GitHub repo clone kar
// git clone https://github.com/kaustubhgharat/Student_Record_Management.git
// cd Student_Record_Management

// ⚙️ BACKEND SETUP
// 🔹 4. Backend install + run
// cd backend
// npm install

// 🔹 5. Backend run kar
// node server.js

// 🔹 6. Frontend install ( terminal 2 me frontend run kro)
// cd frontend
// npm install
// npm run dev / npm start
// npm run dev -- --host(Task_Manager)

// 🔹 8. .env fix kar (VERY IMPORTANT)
// Nano .env
// Frontend me:
// VITE_BACKEND_BASE_URL=http://<EC2_PUBLIC_IP>:5000


// 🌍 FINAL ACCESS
// Browser me open:
// http://<EC2_PUBLIC_IP>:3000

