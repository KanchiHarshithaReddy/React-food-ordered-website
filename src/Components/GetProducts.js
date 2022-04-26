import React, { useEffect, useState } from 'react'
import axios from "axios";
const baseUrl = "https://react-website-2b7a1-default-rtdb.firebaseio.com/data1.json";
function GetProducts() {
    const [getdata, setGetData] = useState([]);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {

            const data1 = Object.values(response.data)
            setGetData(data1);
            console.log(data1)

        })
    }, [])
    return (
 <div>

            {/* {getdata.map((getdata1)=> (<><img alt="img" src={getdata1.ProductImage} /><div>
                <h3>{getdata1.ProductName}</h3>
                <p>{getdata1.ProductPrice}</p><br></br>
                <button type='button' className='btn btn-primary'>Add to Cart</button>
            </div></>

            ))} */}
            <div className='container'>
                    <div className='row'>
                        {getdata.map((getdata1, i) => (
                            <div className='col-md-4' style={{ padding: "5px" }}>
                                <div className='card' style={{ height: "25rem", width: "18rem", padding: "3px" }}>
                                    <img src={getdata1.ProductImage} key={i} className="card-img-top" />
                                    <div className='card-body'>
                            <h5 className='card-title'><b>Name:</b>{getdata1.ProductName}</h5>
                            {/* <div className='card-text'><b>Price:</b>{getdata1.price}</div> */}
                            <div className='card-text'><b>RS:</b>{getdata1.ProductPrice}</div>
                            <button className='btn btn-info'>Order</button>
                            </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

        </div>
    )
}

export default GetProducts