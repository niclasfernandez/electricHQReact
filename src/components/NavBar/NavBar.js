import React from 'react';
import './NavBar.scss';
import CartWidget from '../CartWidget/CartWidget';
import OrderSearch from '../OrderSearch/OrderSearch'
import UserWidget from '../UserWidget/UserWidget';
import {Link} from 'react-router-dom';
import IMAGEPATH from '../../utils/utils';
import IconPerson from "@mui/icons-material/Person"

const NavBar = () => {
  

  return (
    <div>
        <div className='navbar-primary'>
              <div className='div-logo'>
              <Link to="/electricHQReact"><img src={`${IMAGEPATH}logo.png`}alt="logo electric" /></Link>
              </div>
              <div className = 'categories row'>
              <ul className='col-xs-12 col-md-6 col-lg-2'> 
                <Link to="/productos"><li className='col-xs-12 col-md-6 col-lg-2'><button>ALL PRODUCTS</button></li></Link>
              </ul>
              <ul className='col-xs-12 col-md-6 col-lg-2'> 
                <Link to="/productos/Electric Skateboards"><li className='col-xs-12 col-md-6 col-lg-2'><button>E-Skateboards</button></li></Link>
              </ul>
              <ul className='col-xs-12 col-md-6 col-lg-2'> 
                <Link to="/productos/Electric Bikes"><li className='col-xs-12 col-md-6 col-lg-2'><button>E-Bikes</button></li></Link>
              </ul>
              <ul className='col-xs-12 col-md-6 col-lg-2'>
                <Link to="/productos/SeaScooters"><li className='col-xs-12 col-md-6 col-lg-2'><button>SeaScooters</button></li></Link>
              </ul>
              <ul className='col-xs-12 col-md-6 col-lg-2'>  
                <Link to="/productos/Electric Surfboards"><li className='col-xs-12 col-md-6 col-lg-2'><button>E-Surfboards</button></li></Link>
              </ul>
              <ul className='col-xs-12 col-md-6 col-lg-2'>  
                <Link to="/productos/create"><li className='col-xs-12 col-md-6 col-lg-2'><button>Create Products</button></li></Link>
              </ul>
              </div>
              <div className='icons'>
              <UserWidget />
              <OrderSearch />
              
              <CartWidget />
              </div>
              
        </div>
        
    </div>
    
    
    );
}
export default NavBar;