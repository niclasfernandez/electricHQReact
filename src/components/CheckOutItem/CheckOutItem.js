import "bootstrap/dist/css/bootstrap.min.css";
import "../CheckOutItem/CheckOutItem.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useContext } from "react";
import IMAGEPATH from "../../utils/utils";

import { CartContext } from "../../context/CartContext";

const CheckOutItem = ({ data }) => {
  const {
    id,
    tipo,
    onCart,
    imageName,
    precio,
    marca,
    modelo,
    stock,
    topFeature1,
  } = data.product;
  const { totalProducts, cartProducts, clear, clearOne } =
    useContext(CartContext);
  return (
    <div className="row">
      <div className="col-3 checkOutItem">
        <img src={`${IMAGEPATH}${imageName}`} alt="Imagen producto" />
      </div>
      <div className="col-3 checkOutItem">
        <p>PRODUCT</p>
        <p>{`${marca} ${modelo}`}</p>
      </div>
      <div className="col-2 checkOutItem">
        <p>PRICE</p>
        <p>{`$ ${precio}`}</p>
      </div>
      <div className="col-2 checkOutItem">
        <p>QUANTITY</p>
        <p>{`${data.quantity}`}</p>
      </div>
      <div className="col-2 checkOutItem">
        <DeleteIcon onClick={() => clearOne(data)} />
      </div>
    </div>
  );
};

export default CheckOutItem;
