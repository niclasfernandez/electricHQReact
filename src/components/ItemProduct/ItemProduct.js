import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../ItemConunt/ItemCount";
import CheckIcon from "@mui/icons-material/Check";
import { useState, useEffect } from "react";
import "./ItemProduct.scss";
import { Link } from "react-router-dom";

import IMAGEPATH from "../../utils/utils";

const ItemProduct = ({ data }) => {
  const { id,_id, tipo, imageName, precio, marca, modelo, stock, topFeature1 } =
    data;
  const [quantitySelected, setQuantitySelected] = useState(0);

  return (
    <div className="card item-product">
      <div className="float-options">
        <Link to={`/productos/${_id}`}>
          <p>Details</p>
        </Link>
      </div>
      <img src={`${IMAGEPATH}${imageName}`} alt="Imagen producto" />
      <div className="card-body text-center">
        <p>
          {marca} {modelo}
        </p>
        <p>
          <CheckIcon />
          stock: {stock}
        </p>
        <span>Price : $ {precio}</span>
        <ItemCount
          stock={data.stock}
          inicial={1}
          setQuantitySelected={setQuantitySelected}
          productData={data}
        />
      </div>
    </div>
  );
};
export default ItemProduct;
