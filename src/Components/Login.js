import React, { useState } from 'react'
import Axios from 'axios'
function Login() {

    const baseUrl = "https://react-website-2b7a1-default-rtdb.firebaseio.com/Login.json"


    const [data, setData] = useState({
      
        name: "",
        email: ""

    })

    function submit(e) {
        e.preventDefault();
        Axios.post(baseUrl, {
            name: data.name,
            email: data.email
        })
            .then(respone => {
                console.log(respone.data)
            })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div className='container'>

            <form onSubmit={(e) => submit(e)}  >
                <div className='container1'>
                    <h1>Login</h1><br></br>
                    <label>Enter your Name  </label><br></br><br></br>
                    <input onChange={(e) => handle(e)} id="name" required="required" value={data.name} placeholder="enter your name ...." type="text"></input><br></br><br></br>
                    <label>Enter your Email  </label><br></br><br></br>
                    <input onChange={(e) => handle(e)} id="email" required="required" value={data.email} placeholder="enter your email ...." type="email"></input><br></br><br></br>

                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form> </div>
    )
}

export default Login