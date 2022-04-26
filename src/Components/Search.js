import React, { useState } from 'react'
import Food from './Food'
function Search() {
    const[search,setSearch]=useState(''); 
    const [data,setData]=useState([]);
    const YOUR_APP_ID="8ff3bdb1";
    const YOUR_APP_KEY="597119ba64da5912fe1c16835507e1db";	
   
    const submitHandler=e=>{
        e.preventDefault();
        console.log(search);
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
            res=>res.json()
        ).then(data=>setData(data.hits))
    }
  return (
    <div className='search'>
        <center><h1>Search Your Food Item</h1>
    <form onSubmit={submitHandler}>
    <input type="text"placeholder='enter your food receipe...' value={search} onChange={(e)=>setSearch(e.target.value)}></input><br></br><br></br>
    <input type="submit" className='btn btn-primary' value="Search"></input>
    </form>
    {data.length>=1 ? <Food data={data}/>:null }
  </center></div>
  )
}

export default Search 