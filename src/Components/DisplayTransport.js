import React from 'react'
import './DisplayTransport.css'
import axios from 'axios';
import { useState ,useEffect} from 'react';

export default function DisplayTransport() {
   const [TransportList, setTransportList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/user/getTransport").then((response) => {
      setTransportList(response.data.transport);     
    });
  },[]);
  
//   const del = ({transport}) => {


//   const handleDelete = async() => {
//     console.log("Good");
//     console.log("Deleted");

//  (  await axios.delete(`http://localhost:3001/user/deleteTransport/${transport._id}`))
//     .then((response)=>console.log(response.data))
//     .catch((error)=> console.log(error));
//   }
// }

    return (
        <>
        <div data-testid="DisplayT" className='display'>
        <h1>Transports</h1>
        <h1>**********</h1>
        <div className="students">
        {
          TransportList.map((transport) => {

            return (
              <div className="student">
                <div>
                  <h3>Name: {transport.name}</h3>
                  <h4>Vehicle Type: {transport.type}</h4>
                  <h4>Seating Capacity: {transport.seats}</h4>
                  <h4>Price: {transport.price}</h4>
                  <button className='menubtn' onClick={ async() => {

(  await axios.delete(`http://localhost:3001/user/deleteTransport/${transport._id}`))
    .then(alert("Deleted!"))
    .catch((error)=> console.log(error));

                  }}>Delete</button>
                  <h1>**********</h1>
                </div>
                </div>
            )
          })
        }
<div class="subMenuu">
  <div class="submenutitle">Back to Main Menu</div>
          <div >
        <a href='/'><button class="menubtn">Menu</button></a>
          </div>
    </div>
        </div>
        </div>
        </>
        
             )
  }

