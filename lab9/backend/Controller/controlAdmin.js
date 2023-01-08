const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true,useUnifiedTopology:true});

const express = require('express')
const movie = require('../model/modelMovie')

const addMovie = async (req,res) => {
  console.log("Creation");
  
  const {name,genre,length} = req.body;


    const newMovie = new movie({
        name,genre,length
      });
      
    console.log(req.body);

    
    const result = await newMovie.save();

    res.send('Controller posted!');


}

const getMovie = (req, res) => {

  movie.find()
  .then((user) => {
    res.status(200).json({
      user: user,
    });
  });
}

  exports.getMovie = getMovie;
  exports.addMovie = addMovie;