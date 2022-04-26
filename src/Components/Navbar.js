import React from 'react'
import { BrowserRouter as Router , Routes, Route,Link } from 'react-router-dom'
import Home from './Home'
// import Services from './Services'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Registration from './Registration'
import Search from './Search'
// import Admin from './Admin'
import AddProducts from './AddProducts'
import GetProducts from './GetProducts'
import Buy from './Buy'
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from './Assets/logo.jpg'
const Navbar = () => {
    return (
        <div>
 
          <Router>
             
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    
      <li className="nav-item active">
      <Link className='nav-link' to={'/'} >home</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link' to={'/about'} >About Us</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link' to={'/contact'} >Contact</Link>
      </li>
      {/* <li className="nav-item">
      <Link className='nav-link' to={'/service'} >Service</Link>
      </li> */}
      <li className="nav-item">
      <Link className='nav-link' to={'/login'} >Login</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link' to={'/registration'} >Registration</Link>
      </li>
      <li className="nav-item">
      <Link  className='nav-link' to={'/search'} >SearchFoodItem</Link>
      </li>
      <li className="nav-item">
      <Link className='nav-link' to={'/addproducts'} ></Link>
      </li>
      <li className="nav-item">
      <Link to={'/getproducts'} ></Link>
      </li>
      <li className='nav-item'>
        <Link to={'/buy'}><img src="./Assets/logo.jpg" alt="logo" height="40px" className='logo'></img></Link>
      </li>
      {/* <div className='admin'>
      <li className="nav-item">
      <Link className='nav-link' to={'/admin'} >Admin</Link>
      </li>
      
      </div> */}
      {/* <li> <div><img src="./Assets/logo.jpg" alt="logo" height="40px" className='logo'></img></div></li> */}
    </ul>
  </div>
</nav>
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/about" element={<About/>}></Route>
                  <Route path="/contact" element={<Contact/>}></Route>
                  {/* <Route path="/services" element={<Services/>}></Route> */}
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/registration" element={<Registration/>}></Route>
                  <Route path="/search" element={<Search/>}></Route>
                  <Route path="/addproducts" element={<AddProducts/>}></Route>
                  <Route path="/getproducts" element={<GetProducts/>}></Route>
                  {/* <Route path="/admin" element={<Admin/>}></Route> */}
                  <Route path="/buy" element={<Buy/>}></Route>
              </Routes>
          </Router>
        </div>
    )
}
export default Navbar