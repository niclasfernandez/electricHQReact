import { useEffect, useState, useContext } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import { useCookies } from "react-cookie";
import { CartContext } from "../../context/CartContext";

const ItemListContainer = ({ title }) => {
  const { category } = useParams();
  const [cookies, setCookie] = useCookies(['user']);

  const {getToken, getUser, updUser} = useContext(CartContext)

  




  async function getData(){

    console.log("localStorage ",localStorage.getItem('authToken'))
    const response = await fetch("https://ehqbackend-production.up.railway.app/api/stores/storeProducts", {
      method: "GET",
      headers: {
        "Content-type":"application/json",
        "Authorization":localStorage.getItem('authToken')
      },
    });
    console.log("response status", response.status)
    let data=null
    if (response.status == 401)
      setListProducts("unauthorized")
    else{
      data = await response.json()
      console.log("data del fetch", JSON.stringify(data))
      console.log("Data Products ", data.products)
      category == "all" || category == undefined?
      setListProducts(data.products)
      :setListProducts(data.products.filter((producto) => producto.tipo == category));
      updUser(data.user.user)
    }
    return(data.products)

  }
  

  const [listProducts, setListProducts] = useState([]);

  // const getProducts = async () => {
  //   const productCollection = collection(db, "productos");
  //   const productSnapshot = await getDocs(productCollection);
  //   const productList = productSnapshot.docs.map((doc) => {
  //     let product = doc.data();
  //     product.id = doc.id;
      
  //     return product;
  //   });

  //   return productList;
  // };

  useEffect(() => {
         let res = getData()
        //category == "all" || category == undefined
        //? 
       
        //: setListProducts(res.filter((producto) => producto.tipo == category));
    // });

  }, [category]);

  return (
    <div className="list-products">
      <h2>Welcome {getUser().first_name} {getUser().last_name}</h2>
      {getUser().premium =='Y'&&<h3>PREMIUM USER!!</h3>}
      {getUser().role=="admin" &&<h3>ADMIN</h3>}
      <h4>Last Login: {getUser().lastLogin}</h4>
      
      {console.log("useState; ", listProducts)}
      <ItemList dataProducts={listProducts}></ItemList>
    </div>
  );
};
export default ItemListContainer;
