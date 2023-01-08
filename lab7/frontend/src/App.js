import './App.css';
import { useState , useEffect} from "react";
import axios from "axios";
export default App;

function App() {

  const [listofUsers,setListofUsers]= useState([]);
  const [name,setName]= useState("")
 let arr=[name];
   const createUser = () => {
    alert(name + " - Added to the Database");
    axios.post('http://localhost:3001/add', {
      name,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
  //   alert("Hello");
  //   axios.post('http://localhost:3001/add', {
  //      name:'saimsssss',
  //    }).then((response)=> {
  //     alert("User Created");
     
  //   }); CLEAR buuton kahan ha is function ko hata kay try karo 
   };
function clear(){
  setName(() => "");
}
  useEffect( () => {

    axios.get("http://localhost:3001").then((response) => {
     setListofUsers(response.data);
    });
   }, []);
  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="usersDisplay">
      {arr.map((users) => {
        return (
          <div>

            
           
            </div>
        )
      })}
       

      </div>
     <div>
     
      <h3>Write your data in the text box</h3>
      <input type="text" value={name} placeholder="Name" onChange={(event) => {
        setName(event.target.value);
      }}></input>
      <button onClick={function(event){ createUser()}}>Create User</button>

     </div>
     <button onClick = {function(event) {clear()}}>Clear</button>
    </div>
  );
}
// onClick={createUser} 
// function(event){ func1(); func2()} ohhhhhhhhhh
// jab bhi create user pe click hoga to uspe dala hai