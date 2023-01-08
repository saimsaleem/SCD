const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://saim:123@vacay.fw2ph4w.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology:true});
const { MongoClient, ObjectId } = require('mongodb');
const express = require('express')
const transport = require('../model/modelTransport')


const addTransport = async (req,res) => {
  console.log("Creation");
  
  const {name,type,seats,price,image} = req.body;


    const newTransport = new transport({
        name,type,seats,price,image
      });
      
    console.log(req.body);

    
    const result = await newTransport.save();

    res.send('Controller posted!');


}

const getTransport = (req, res) => {

  transport.find()
  .then((transport) => {
    res.status(200).json({
      transport: transport,
    });
  });
}

const deleteTransport = async (req, res) => {

  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid' });
  }
  const transports = await transport.findOneAndDelete({ _id: id });
  if (transports) {
    res.status(200).json(transports);
  } else {
    res.status(404).json({ error: 'Not Found!' });
  }
};

  exports.getTransport = getTransport;
  exports.addTransport = addTransport;
  exports.deleteTransport = deleteTransport;