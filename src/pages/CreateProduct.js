import CreateProductContainer from '../components/createProductContainer/createProductContainer'
import "../App.scss"

const CreateProduct=({title}) =>{
    return(
        <div className="main">
           <CreateProductContainer title ="Create Product" />
        </div> 
    )
    
}

export default CreateProduct