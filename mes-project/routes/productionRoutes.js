const express = require('express');
const { createWorkOrder, getWorkOrders } = require('../controllers/productionController');
const router = express.Router();

// Routes for work orders
router.post('/workorders', createWorkOrder);
router.get('/workorders', getWorkOrders);

module.exports = router;
