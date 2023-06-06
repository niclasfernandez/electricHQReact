

import CreateProduct from "../createProduct/createProduct";


const CreateProductContainer = ({title}) => {
  return (
    <div className='createProductContainer'>
      <div className='title'>
        <h1 >{title}</h1>
      </div>
      <CreateProduct title="Log in to your account" />
    </div>

  );
};

export default CreateProductContainer;