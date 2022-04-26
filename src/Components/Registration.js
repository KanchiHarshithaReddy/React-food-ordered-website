import React, { useState } from 'react'
import Axios from 'axios'
function Registration() {
    const baseUrl="https://react-website-2b7a1-default-rtdb.firebaseio.com/Registration.json"


    const[data,setData]=useState({
        id:"",
        name:"",
        email:"",
        address:"",
        phonenumber:""
       
    })
    function submit(e){
        e.preventDefault();
        Axios.post(baseUrl,{
            name:data.name,
            email:data.email,
            address:data.address,
            phonenumber:data.phonenumber
        })
        .then(respone=>{
            console.log(respone.data)
        })
    }
    function handle(e){
const newdata={...data}
newdata[e.target.id]=e.target.value
setData(newdata)
console.log(newdata)
    }
  return (

    <div className='container'>  
    <div className='container1'>
         <form onSubmit={(e)=>submit(e)}  >
            <div className='container2'>
                <h1>Registration</h1><br></br>
                <div className='container3'>
    <label>Enter your Name  </label>&nbsp;&nbsp;
    <input onChange={(e)=>handle(e)} id="name" required="required" value={data.name} placeholder="enter your name ...." type="text"></input><br></br><br></br>
    <label>Enter your Email  </label>&nbsp;&nbsp;
    <input onChange={(e)=>handle(e)} id="email" required="required" value={data.email} placeholder="enter your email ...." type="email"></input><br></br><br></br>
    <label>Enter your Address  </label>&nbsp;&nbsp;
    <input onChange={(e)=>handle(e)} id="address" required="required" value={data.address} placeholder="enter your address ...." type="text"></input><br></br><br></br>
    <label>Enter your PhoneNumber  </label>&nbsp;&nbsp;
    <input onChange={(e)=>handle(e)} id="phonenumber" required="required" value={data.phonenumber} placeholder="enter your phonenumber ...." type="number"></input><br></br><br></br>

    <button className='btn btn-primary'>Submit</button></div></div>
    
    </form> </div></div>  
  )
}
export default Registration