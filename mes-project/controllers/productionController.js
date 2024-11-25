const workOrder = require('../models/workOrder');

// Use the workOrder model in your code
const newOrder = new workOrder({
    orderId: '12345',
    product: 'Widget',
    quantity: 100,
  });
  
  newOrder.save()
    .then(() => {
      console.log('WorkOrder saved!');
    })
    .catch((err) => {
      console.error('Error saving WorkOrder:', err);
    });

// Create a new work order
const createWorkOrder = async (req, res) => {
    try {
      const { orderId, product, quantity, status, startDate, endDate } = req.body;
  
      // Create a new WorkOrder instance with the provided data
      const newWorkOrder = new workOrder({
        orderId,
        product,
        quantity,
        status: status || 'Pending', // Default to "Pending" if no status is provided
        startDate,
        endDate,
      });
  
      // Save the new work order to the database
      await newWorkOrder.save();
  
      // Send success response with the saved work order
      res.status(201).json(newWorkOrder);
    } catch (error) {
      // Handle errors
      console.error('Error creating work order:', error);
      res.status(500).json({ message: 'Error creating work order' });
    }
  };

// Get all work orders
const getWorkOrders = async (req, res) => {
    try {
      const workOrders = await workOrder.find();
      res.status(200).json(workOrders);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching work orders' });
    }
  };
  
  module.exports = { createWorkOrder, getWorkOrders };
