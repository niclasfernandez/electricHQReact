import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import products from "../../utils/products.mock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProduct().then((res) => {
      setProductData(res);
    });
  }, [id]); //en montaje

  // const getProduct = async () => {
  //   const docRef = doc(db, "productos", id);
  //   const docSnapshot = await getDoc(docRef);

  //   let product = docSnapshot.data();
  //   product.id = docSnapshot.id;

  //   return product;
  // };
  async function getProduct(){
    console.log("entra en getDataDetails")
    const path = `https://ehqbackend-production.up.railway.app/api/products/${id}`
    console.log('path', path)
    const response =await fetch(path)
    console.log("response en detail",response)
    const data = await response.json()
    console.log("data en detail",data)
    return(data)

  }

  return (
    <div className="main-container">
      <ItemDetail data={productData} />
    </div>
  );
};

export default ItemDetailContainer;
