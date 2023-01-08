import React from 'react'
import './AddTransport.css'
import axios from 'axios';
import { useState } from 'react';

export default function AddTransport() {

const [name,setName]= useState("");
const [type,setType]= useState("");
const [seats,setSeats]= useState("");
const [price,setPrice]= useState("");
const [image,setImage]= useState("");
const submit = () => {
  
  axios.post('http://localhost:3001/user/addTransport', {
    name,type,seats,price,image
  })
  .then(function (response) {

  alert("Name: " + name +
  "\nType: " + type +
  "\nSeats: " + seats +
  "\nPrice: " + price +
  "\nImages: " + image+
  "\nAdded to Database!"
  );
    return response;

  })
  .catch(function (error) {
    alert('Something went wrong!');
    return error;
  });

  

  setName(() => "");
  setType(() => "");
  setSeats(() => "");
  setPrice(() => "");
  setImage(() => "");

}

  return (
          <>
<div data-testid="AddT">
<div class="subMenu">
  <div class="submenutitle">Back to Main Menu</div>
          <div >
        <a href='/'><button class="menubtn">Menu</button></a>
          </div>
    </div>

	    <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's add new Transport!</div>
      <div class="input-container ic1">
        <input id="name" class="input" type="text" placeholder=" " value={name} onChange={(event) => {
        setName(event.target.value);}} />
        <div class="cut"></div>
        <label for="name" class="placeholder">Vehicle Name</label>
      </div>

      <div class="input-container ic2">
        <input id="type" class="input" type="text" placeholder=" " 
        value={type} onChange={(event) => {
          setType(event.target.value);}}/>
        <div class="cut"></div>
        <label for="type" class="placeholder">Vehicle Type</label>
      </div>

      <div class="input-container ic2">
        <input id="seats" class="input" type="text" placeholder=" "
        value={seats} onChange={(event) => {
          setSeats(event.target.value);}}
           />
        <div class="cut cut-short"></div>
        <label for="seats" class="placeholder">Seating Capacity</label>
      </div>

      <div class="input-container ic2">
        <input id="price" class="input" type="text" placeholder=" "
        value={price} onChange={(event) => {
          setPrice(event.target.value);}} />
        <div class="cut cut-short"></div>
        <label for="price" class="placeholder">Price</label>
      </div>

      <div class="input-container ic2">
        <input id="image" class="input" type="text" placeholder=" " 
        value={image} onChange={(event) => {
          setImage(event.target.value);}}/>
        <div class="cut cut-short"></div>
        <label for="image" class="placeholder" >Images</label>
      </div>
      <button type="text" class="submit" onClick={function(event){ submit()}}>Add to Transports</button>
    </div>

    

    </div>
      
      </>
  )
  }
