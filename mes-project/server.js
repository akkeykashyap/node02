const express =require('express');
const dotenv =require('dotenv');
const connectDB = require('./config/db');
const productionRoutes = require('./routes/productionRoutes');
const path = require('path');

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the create work order page
app.get('/create-work-order', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'create-Work-Order.html'));
  });

  // Serve the show work order page
app.get('/show-work-order', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'showWorkOrder.html'));
  });

// Routes
app.use('/api', productionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});