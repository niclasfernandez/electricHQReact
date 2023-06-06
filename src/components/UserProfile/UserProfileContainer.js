//import ItemDetail from "../ItemDetail/ItemDetail";
//import "./ItemDetailContainer.scss";
//import products from "../../utils/products.mock";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import UserProfile from './UserProfile'

//import db from "../../utils/firebaseConfig";
//import { doc, getDoc } from "firebase/firestore";

const UserProfileContainer = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const {getUser}  =
        useContext(CartContext);

  useEffect(() => {
   
      setUserData(getUser());

  }, [id]); //en montaje

  // const getProduct = async () => {
  //   const docRef = doc(db, "productos", id);
  //   const docSnapshot = await getDoc(docRef);

  //   let product = docSnapshot.data();
  //   product.id = docSnapshot.id;

  //   return product;
  // };
//   async function getUser(){
//     console.log("entra en getDataDetails")
//     const path = `https://ehqbackend-production.up.railway.app/api/users/${id}`
//     console.log('path', path)
//     const response =await fetch(path)
//     console.log("response en detail",response)
//     const data = await response.json()
//     console.log("data en detail",data)
//     return(data)

//   }

  return (
    
    //<ItemDetail data={productData} />
   <>
    {console.log("antes de userprofile", userData)}
     <UserProfile data={userData}/>
   </>
        
  
  );
};

export default UserProfileContainer;