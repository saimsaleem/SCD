var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab7', {useNewUrlParser: true,useUnifiedTopology:true});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
   next();
  });

app.get('/', (req, res) => { 
    res.send('Home Page!');
  });



  app.listen(3001, () => {
    console.log('Express application running on localhost:3001');
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