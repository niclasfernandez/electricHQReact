import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemDetail.scss";
import { useState} from "react";
import { Link } from "react-router-dom";
import IMAGEPATH from "../../utils/utils";

import ItemCount from "../ItemConunt/ItemCount";

const ItemDetail = ({ data }) => {
  const [quantitySelected, setQuantitySelected] = useState(0);


  return (
    <article className="product-detail">
      <img
        src={`${IMAGEPATH}${data.imageName}`}
        alt=""
        className="product-detail__img"
      />
      <div className="product-detail__info">
        <h2 className="name">
          {data.marca} {data.modelo} {data.tipo}
        </h2>
        <ul className="info-grid no-bullets">
          <li>Price:</li>
          <li>${data.precio}</li>
          <li>Top Features:</li>
          <ul>
            <li>{data.topFeature2}</li>
            <li>{data.topFeature3}</li>
          </ul>

          <li>Stock:</li>
          <li>{data.stock}</li>
        </ul>

        <ItemCount
          stock={data.stock}
          inicial={1}
          setQuantitySelected={setQuantitySelected}
          productData={data}
        />
        <Link to="/Checkout">
          <button className="button btn-success">FINISH SHOPPING</button>
        </Link>
      </div>
    </article>
  );
};

export default ItemDetail;
