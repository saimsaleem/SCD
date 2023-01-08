const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true,useUnifiedTopology:true});
const admin = express.Router();
const bodyParser = require('body-parser')
const controller = require('../Controller/controlAdmin')
const movie = require('../model/modelMovie')
const movieorder = require('../model/modelOrder');
const { Router } = require('express');

admin.use(bodyParser.json())
admin.use(express.urlencoded({extended: true}));

admin.get('/', (req, res) => {
    res.send('In Routes')
})

admin.post('/addTransport',controller.addTransport);
admin.get('/getTransport',controller.getTransport);

movie.route('/add').post((req,res) => {


    const name = req.body.name;
    const genre = req.body.genre;
    const length = req.body.length;

    const newMovie = new movie({
        name,genre,length,
    });

    newMovie.save().then(() => res.json('Movie Added!')).catch(err => res.status(400).json('Error: ' + err));

})

module.exports = admin;