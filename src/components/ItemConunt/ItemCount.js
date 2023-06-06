import { useEffect, useState, useContext } from 'react';
import {CartContext} from "../../context/CartContext"
import Toastify from 'toastify-js';
import './ItemCount.css';


const ItemCount = ({inicial, stock,quantitySelected, setQuantitySelected, productData}) =>{
   const{id} = productData;
   console.log('id desde product data', id);
   const { getOnCartByProduct, cartProducts, addProductToCart} =useContext(CartContext); 
   console.log("llega ", inicial);

   console.log('in Stock already ',getOnCartByProduct(productData));
    const [contador, setContador] = useState(getOnCartByProduct(productData));


    const addNumber = () => {
       // contador<stock? setContador(contador + 1):alert("alcanzo el stock");
       setContador(contador + 1)
    }
    const removeNumber = () => {
        contador>1? setContador(contador - 1):console.log("llego a cero");
    }

    useEffect( () => {
        console.log("Actualizacion")
        
        // setContador(1)
    }, [contador]);

   
    //setContador(getOnCartByProduct(productData));

    

    const onAdd= ()=>{
        setQuantitySelected(contador);
        
        productData.onCart = contador;
        console.log("product agregado ", productData);
        addProductToCart(productData);
    }
    return(
        <>
            <div className='quantity'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button className ="btn btn-warning" onClick={onAdd}>ADD TO CART</button>
            {console.log("existe en el cart", cartProducts.products.find(el=>el.id==productData.id))}
        </>
    );
}

export default ItemCount;