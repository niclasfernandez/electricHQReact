import { useState, useEffect, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.scss";
import { Link } from "react-router-dom";
import IMAGEPATH from "../../utils/utils";
import IconPerson from "@mui/icons-material/Person";


const CartWidget = () => {
  const [anchorEl, setAnchorEl] = useState(null);


  const { totalProducts, cartProducts, clear, clearOne } =
    useContext(CartContext);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const calcCartQuantity = (cart) => {
    let count = 0;
    console.log("calcCartquantity", cart)
    cart.products.map((prod) => {
      console.log("producto ", prod.id, "cantidad", prod.onCart);
      count = count + prod.quantity;
      console.log("suma parcial ", count);
    });
    console.log("suma total", count);
    return count;
  };
  console.log("total Products :", totalProducts);
  return (
    <>
      {console.log("cart products en widget", cartProducts)}
      <div className="cart-widget">
        <ShoppingCartIcon
          fontSize="large"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          width="10px"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        {console.log("cartProducts 123", cartProducts)}
        {cartProducts.length !== 0 && <p>{calcCartQuantity(cartProducts)}</p>}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {console.log("antes del map", cartProducts.products)}
          {cartProducts.products.map((product) => {
            return (
              
              <div className="myCart" key={product.product._id}>
                {console.log("Products dentro del map", product)}
                <img
                  src={`${IMAGEPATH}${product.product.imageName}`}
                  alt=""
                />
                <div className="cart-product__details">
                  <p>
                    {product.product.modelo} {product.product.tipo}
                  </p>
                </div>
                <div className="cart-product__details">
                  <p>$ {product.precio}</p>
                  <p>Qunatity {product.quantity}</p>
                </div>
                <div className="cart-product__action">
                  <DeleteIcon onClick={() => clearOne(product)} />
                </div>
              </div>
            );
          })}
          <button className="btn-warning" onClick={() => clear()}>
            EMPTY CART
          </button>
          <Link to="/checkout">
            <button className="btn-warning">FINISH SHOPPING</button>
          </Link>
        </Menu>
      </div>
    </>
  );
};

export default CartWidget;
