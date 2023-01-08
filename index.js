
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myfirstmongodb', {useNewUrlParser: true});


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
  email: String,
  password: String,
  
 });

const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/myfirstmongodb', {useNewUrlParser: true,useUnifiedTopology:true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.post('/signup', async (req, res) => {
// const body = req.body;
// console.log('req.body', body);
// res.send({
//   message: 'Success'
// });

//   });

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

app.get('/users', async (req, res) => {

  const allStudents = await users.find();
  console.log('allUsers', allStudents);

  res.send(allStudents);
});


app.post('/login',  async (req, res) => {
    const body = req.body;
    console.log('req.body', body);

    const email = body.email;

    // lets check if email exists

    const result = await users.findOne({"email":  email});
    if(!result) // this means result is null
    {
      res.status(401).send({
        Error: 'This user does not exists. Please signup first'
       });
    }
    else{
      // email did exist
      // match password

      if(body.password === result.password){

        // allow this user access

        console.log('Match');

        res.send({message: 'Successfully Logged in'});
      }

        else{

          console.log('Password does not match');

          res.status(401).send({message: 'Wrong email or Password'});
        }


    }

  });