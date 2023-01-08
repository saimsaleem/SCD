const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

  movie:{
    type: mongoose.Types.ObjectId,
    required: true,
    ref:'movie'
  }
},
  {
    timestamps:true,
  }
    
  );

  module.exports = mongoose.model("modelOrder", orderSchema);