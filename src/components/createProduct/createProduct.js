import { useEffect, useState } from "react";

const CreateProduct = ({title}) =>{

    const [formData, setFormData] = useState({
        marca: "",
        modelo: "",
        tipo: "",
        rango: "",
        precio: "",
        topFeature1:"",
        topFeature2:"",
        topFeature3:"",
        liked:"",
        stock:"",
        onCart:""
      });

      const [auth, setAuth] = useState({error:""})

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log("formData", formData);
      };

      const create = async () => {
        console.log("antes del post create!!!!")
        await fetch("https://ehqbackend-production.up.railway.app/api/products", {
      method: "POST",
      body: JSON.stringify({
       formData,
      }),
      headers: {
        "Content-type":"application/json",
        "Authorization":localStorage.getItem('authToken')
      }
    })
      .then((response) => response.json())
      .then((json) => {
         console.log("response del login", json)
         setAuth(json)
       
       //  updUser(json.user)
         
      })
        //console.log("user en context", getUser())
        //console.log('result', result)
        //navigate("/productos");
    };

    return(
        <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              Style="border-radius: 1rem;"
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="marca"
                      id="marca"
                      name="marca"
                      className="form-control form-control-lg"
                      value={formData.marca}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typemarcaX">
                      marca
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="modelo"
                      id="modelo"
                      name="modelo"
                      className="form-control form-control-lg"
                      value={formData.modelo}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typemodeloX">
                      modelo
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="tipo"
                      id="tipo"
                      name="tipo"
                      className="form-control form-control-lg"
                      value={formData.tipo}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typetipoX">
                      tipo
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="rango"
                      id="rango"
                      name="rango"
                      className="form-control form-control-lg"
                      value={formData.rango}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typerangoX">
                      rango
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="precio"
                      id="precio"
                      name="precio"
                      className="form-control form-control-lg"
                      value={formData.precio}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typeprecioX">
                      precio
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="topFeature1"
                      id="topFeature1"
                      name="topFeature1"
                      className="form-control form-control-lg"
                      value={formData.topFeature1}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typetopFeature1X">
                      topFeature1
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="topFeature2"
                      id="topFeature2"
                      name="topFeature2"
                      className="form-control form-control-lg"
                      value={formData.topFeature2}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typetopFeature2X">
                      topFeature2
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="topFeature3"
                      id="topFeature3"
                      name="topFeature3"
                      className="form-control form-control-lg"
                      value={formData.topFeature3}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typetopFeature3X">
                      topFeature3
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="imageName"
                      id="imageName"
                      name="imageName"
                      className="form-control form-control-lg"
                      value={formData.imageName}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typeimageNameX">
                      imageName
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="liked"
                      id="liked"
                      name="liked"
                      className="form-control form-control-lg"
                      value={formData.liked}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typelikedX">
                      liked
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="stock"
                      id="stock"
                      name="stock"
                      className="form-control form-control-lg"
                      value={formData.stock}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typestockX">
                      stock
                    </label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="onCart"
                      id="onCart"
                      name="onCart"
                      className="form-control form-control-lg"
                      value={formData.onCart}
                      onChange={handleChange}
                    />
                    <label className="form-label" for="typeonCartX">
                      onCart
                    </label>
                  </div>
               
        
                </div>
               
                  <p className="mb-0">
        
                    <button
                      className="btn btn-outline-light btn-sm px-5"
                      type="submit"
                      onClick={create}
                    >
                     CREATE PRODUCT
                    </button>
                  </p>
                  <p className="large lg-5 pb-lg-2">
                    <a >
                      {auth.error}
                    </a>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    
    </section>
    )
}

export default CreateProduct