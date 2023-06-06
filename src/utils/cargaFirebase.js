import React from "react";
import { useState,useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import products from "../utils/products.mock";

//solo para update de productos
//import { arrayProducts } from '../utils/product';

import { uploadCollectionItems } from "../utils/helper";


let arrayProducts = []


const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 500);
});



const setArrayProducts= ()=>{
    
    getProducts.then((data) => {
        
   
        
        
        arrayProducts = data;
        
        
      });

}
  
setArrayProducts();

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIsk3sK-zO_PbA5eAEB0nwxLzau5QYqfg",
    authDomain: "elechq-e9cce.firebaseapp.com",
    projectId: "elechq-e9cce",
    storageBucket: "elechq-e9cce.appspot.com",
    messagingSenderId: "186953871449",
    appId: "1:186953871449:web:0133268cad070f52470148"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;


//Correr por única vez cuando aún no he subido los productos a mi colección.


const uploadProducts =()=>{
    if(true){
        setTimeout(() =>{
          uploadCollectionItems(products, 'productos');
        },3000)
      }

}
