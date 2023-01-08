var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab7', {useNewUrlParser: true,useUnifiedTopology:true});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/', (req, res) => { 
    res.send('Home Page!');
  });



  app.listen(8080, () => {
    console.log('Express application running on localhost:8080');
  });
  

  
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


const users = mongoose.model('users',{

  name: String

});


app.post('/add', async (req, res) => {
    const body = req.body;
    console.log('req.body', body)
      try{
    const Users = new users(body);
    
    const result = await Users.save();
    res.send({
      message: 'User Added Successfully!!'
    });
    
      }
      catch(ex){
        console.log('ex',ex);
        res.send({message: 'Error'}).status(401);
      }
    })