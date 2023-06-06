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
    getData().then((res) => {
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

  async function getData(){

    console.log("localStorage ",localStorage.getItem('authToken'))
    const response = await fetch("https://ehqbackend-production.up.railway.app/api/products/${id}", {
      method: "GET",
      headers: {
        "Content-type":"application/json",
        "Authorization":localStorage.getItem('authToken')
      },
    });
    console.log("response status", response.status)
    let data=null
    // if (response.status == 401)
    //   //setListProducts("unauthorized")
    // else{
      data = await response.json()
      console.log("data del fetch", JSON.stringify(data))
      //console.log("Data Products ", data.products)
      //category == "all" || category == undefined?
      //setListProducts(data.products)
      //:setListProducts(data.products.filter((producto) => producto.tipo == category));
      //updUser(data.user.user)
    //}
    return(data)

  }
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
