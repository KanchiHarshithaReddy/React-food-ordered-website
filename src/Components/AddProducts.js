import React, { useState} from 'react'
 import axios from 'axios';
 
// import axios from 'axios';
function AddProducts() {

    const [product, setProduct]=useState({
           ProductName:"",
           ProductPrice:"",
           ProductImage:""
    });
    // const[productPrice,setProductPrice]=useState(0);
    // const[productImg,setProductImg]=useState(null);
    // const[error,setError]=useState('');
    // const type=['image/png','image/jpeg']
     const baseUrl = "https://react-website-2b7a1-default-rtdb.firebaseio.com/data1.json"
    // const productImgHandler=(e)=>{
    //     let selectedFile=e.target.files[0];
    //     if(selectedFile&& type.includes(selectedFile.type)){
    //         setProductImg(selectedFile);
    //         setError('');
    //     }else{
    //         setProductImg(null);
    //         setError('please select a valid image like png or jpeg')
    //     }

    // }
    const addProduct=(e)=>{
        e.preventDefault();
       

        axios.post(baseUrl,{
            ProductName:product.ProductName,
            ProductPrice:product.ProductPrice,
            ProductImage:product.ProductImage

        }).then((res)=>console.log(res.data)) 
    }
     const onsubmit=(e)=>{
         setProduct({...product,[e.target.name]:[e.target.value]})
     }
    return (

        <div>
           
            <form autoComplete='off' onSubmit={addProduct}>
                
            <div className='card'>
                <h1 className='addheading'>ADD PRODUCTS</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1"><b>Product Name</b></label>
                    <input type="text"  name="ProductName" onChange={onsubmit} value={product.ProductName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name ..." />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1"><b>Product Price</b></label>
                    <input type="number" name="ProductPrice" onChange={onsubmit} value={product.ProductPrice} className="form-control" id="exampleInputPassword1" placeholder="Enter Product Prics..." />
                </div><br></br>
                <div className="form-group">
                    <label for="exampleInputPassword1"><b>Product Image</b></label>
                    <input type="file" name="ProductImage"  onChange={onsubmit} value={product.ProductImage}  className="form-control" id="exampleInputPassword1" />
                </div><br></br>

                <button type="submit" class="btn btn-primary  mt-3">Add Data</button>
                </div>
            </form>
           {/* {error&&<span>{error}</span>} */}
        </div>
    )
}

export default AddProducts