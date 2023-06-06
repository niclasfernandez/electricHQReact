import ItemProduct from "../ItemProduct/ItemProduct";
import "./ItemList.scss"


const ItemList = ({dataProducts}) =>{
  
    return(
        <div className= "container productContainer">
            {dataProducts == "unauthorized" ?(<h1>UNAUTHORIZED, PLEASE LOGIN</h1>):(
             
                dataProducts.map((product)=>{
                return product.stock>0 ? <ItemProduct key ={product.id} data={product}/> : console.log("producto no agregado por falta de stock");
                })
            )
            }
        </div>


    );
}

export default ItemList;