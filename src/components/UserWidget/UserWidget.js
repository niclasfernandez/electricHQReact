import {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import './UserWidget.scss'
import IconPerson from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import IMAGEPATH from "../../utils/utils";
import { Link, useNavigate } from "react-router-dom";



    const UserWidget = () => {
      const [anchorEl, setAnchorEl] = useState(null);
      
      const navigate = useNavigate();
    
      const {getUser,updUser, setCartProducts}  =
        useContext(CartContext);
    
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const logOut = async () => {
        console.log("antes del post!!!!")
        
        await fetch("https://ehqbackend-production.up.railway.app/api/session/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
         console.log("response del logout", json)
         localStorage.setItem('authToken', '') 
         
         setCartProducts({_id:getUser().cart, products:[] })   
         updUser({})
         handleClose()
      })
        console.log("user en context", getUser())
        //console.log('result', result)
        navigate("/electricHQReact");
    };
    const updProfile =()=>{
      navigate("/user/"+getUser()._id)
    }
    
    
      console.log("User en widget:", getUser());
      console.log('imagen',getUser().avatar)
      return (
        <>
        {console.log("getUser widget", getUser())}
        {console.log("avatar parsed", getUser().avatar ? getUser().avatar.split('/').reverse():'')}
          <div className="cart-widget">
         
          
            <IconPerson
              fontSize="large"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              width="10px"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color={getUser().premium=="Y" ? "warning":"black"}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >   
                <div className = "myCart">
                    <img
                      src={`${IMAGEPATH}${getUser().avatar ? getUser().avatar.split('/').reverse()[0]:''}`}
                      alt=""
                    />
                      <div className="User" key={getUser()._id}>
                      
                        <div className="cart-product__details">
                          <p>
                            {getUser().first_name} {getUser().last_name}
                          </p>
                        </div>
                        {getUser().premium =="Y" &&
                        <div className="cart-product__details alert alert-warning" > PREMIUM USER
                        </div>
                        }
                        
                        <div className="cart-product__details">
                          <p>email: </p>
                        </div>
                        <div className="cart-product__details">
                          <p>{getUser().email}</p>
                        </div>
                        <div className="cart-product__details">
                          <button className="btn-dark" onClick={updProfile}>UPDATE PROFILE</button>
                        </div>
                        <br></br>
                        <div className="cart-product__details">
                         <button className="btn-dark" onClick={logOut}>LOGOUT</button>
                        </div>
                      </div>
                  </div>
            </Menu>
          </div>
        </>
      );
    };
       

export default UserWidget;
