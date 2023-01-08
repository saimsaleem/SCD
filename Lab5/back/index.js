
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDB', {useNewUrlParser: true});


const express = require('express');
const app = express();

app.get('/', (req, res) => { 
  res.send('Home');
});

app.listen(8080, () => {
  console.log('Express application running on localhost:8080');
});

const users = mongoose.model('users', {
  name: String,
  age: String,
  email: String,
  contact: String,
  gender: String
  
 });

const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/myDB', {useNewUrlParser: true,useUnifiedTopology:true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/getall',(req, res) => {

users.find()
  .then((users) => {
    res.status(200).json({
      users: users,
    });
  })
})


app.post('/signup', async (req, res) => {
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

app.post('/find',  async (req, res) => {
    const body = req.body;
    console.log('req.body', body);

    const name = body.name;

    // lets check if name exists

    const result = await users.findOne({"name": body.name});
    if(!result) // this means result is null
    {
      res.status(401).send({
        
        Error: 'This user doesnot exists.'
       });
    }
    else{

        console.log(result.name);
        console.log(result.age);
        console.log(result.gender);
        console.log(result.contact);
        console.log(result.email);

        res.send({message: 'Successfully Logged in'});
      }

  });