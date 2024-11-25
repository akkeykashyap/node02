const mongoose = require('mongoose');

const WorkOrderSchema = new mongoose.Schema({
    orderId : { type : String, required: true},
    product : { type: String ,required :true},
    status : { type:String , default:'Pending'},
    startDate :{ type:Date,default:Date.now},
    endDate : {type:Date},
    quantity :{type:Number, required : true} 
});

const WorkOrder = mongoose.model('WorkOrder' ,WorkOrderSchema);

module.exports =WorkOrder;