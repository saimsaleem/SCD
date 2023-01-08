const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },

    
    
    
  },
  
   { timestamps:true}
  
  );
  module.exports = mongoose.model("movie", movieSchema);