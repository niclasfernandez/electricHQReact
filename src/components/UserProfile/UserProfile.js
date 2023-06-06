import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import IMAGEPATH from "../../utils/utils";
import {CartContext} from '../../context/CartContext'

import axios from "axios";


import ItemCount from "../ItemConunt/ItemCount";

const UserProfile = ({ data }) => {
    const [formData, setFormData] = useState({
        adress: data.adress ,
        phone: data.phone ,
        country: data.country,
        avatar: data.avatar
      });

      const [avatar, setAvatar] = useState('')

      console.log("avatar", avatar)

 const navigate = useNavigate()
 const {updUser,getUser} = useContext(CartContext)

 useEffect(() => {
    setFormData(data)
   //category == "all" || category == undefined
   //? 
  
   //: setListProducts(res.filter((producto) => producto.tipo == category));
// });

}, [data]);
 console.log("entrando en data", data)
    
  console.log("formData", formData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData", formData);
  };

  const submitUserUpdate = async () => {

    const newForm = new FormData()
    console.log("antes del post!!!!")
    newForm.append('adress', formData.adress);
    newForm.append('phone',formData.phone)
    newForm.append('country',formData.country)
    newForm.append('avatar',avatar)

    console.log("form data con avatar", newForm)
    const result = axios.post(`https://ehqbackend-production.up.railway.app/api/users/${data._id}`, 
    newForm,
    {headers: {
        "Content-Type": "multipart/form-data"
  }}
)
  .then((response) => {
    console.log("user update",response.data)
    updUser(response.data)
    response.data.premium ? alert(`Submitted! You are now PREMIUM!!`): alert('Submited!')
    navigate("/productos");
  })
  
  
  // .then((json) => {
  //    console.log("response del post", json)
  //    updUser(json)
  //    json.premium ? alert(`Submitted! You are now PREMIUM!!`): alert('Submited!') 
  
  //   }
  //)
    //console.log('result', result)
    //navigate("/productos");
};

  const submit = async () => {
    console.log("antes del post!!!!")
    const { adress, phone, country,avatar } = formData;
    await fetch(`https://ehqbackend-production.up.railway.app/api/users/${data._id}`, {
  method: "POST",
  body: JSON.stringify({
    adress, phone, country,avatar
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => {
     console.log("response del post", json)
     updUser(json)
     json.premium ? alert(`Submitted! You are now PREMIUM!!`): alert('Submited!') 
  
    })
    //console.log('result', result)
    //navigate("/productos");
};

  return (
    <div className="row">
    <section className="vh-100 gradient-custom col-lg-6 col-md-12">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="">
            
            <div
              className="card bg-black text-white"
              Style="border-radius: 1rem;"
            > 
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <>
                    <>
                      <h2 className="fw-bold mb-2 text-uppercase">
                        YOUR BASIC INFORMATION 
                      </h2>
                      <p className="text-white-50 mb-5"></p>
                    </>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="form-control form-control-lg"
                        value={data.first_name}
                        //onChange={handleChange}
                      />
                      <label className="form-label" for="typeEmailX">
                        First Name
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="form-control form-control-lg"
                        value={data.last_name}
                        //onChange={handleChange}
                      />
                      <label className="form-label" for="typeEmailX">
                        Last Name
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="age"
                        name="age"
                        className="form-control form-control-lg"
                        value={data.age}
                        //onChange={handleChange}
                      />
                      <label className="form-label" for="typeEmailX">
                        Age
                      </label>
                    </div>
                  </>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-lg"
                      value={data.email}
                      //onChange={handleChange}
                    />
                    <label className="form-label" for="typeEmailX">
                      Email
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="vh-100 gradient-custom col-lg-6 col-md-12">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="">
            <div
              className="card bg-black text-white"
              Style="border-radius: 1rem;"
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <>
                    <>
                      <h2 className="fw-bold mb-2 text-uppercase">
                        {getUser().premium=="N"&& "UPDATE"} ADDITIONAL INFORMATION {data.premium =="N"&& " AND BECOME PREMIUM"}
                      </h2>
                      <p className="text-white-50 mb-5"></p>
                    </>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="adress"
                        name="adress"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        value={formData.adress}
                        //onChange={handleChange}
                      />
                      <label className="form-label" for="typeEmailX">
                        Adress
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control form-control-lg"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label className="form-label" for="typeEmailX">
                        Phone Number
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="form-control form-control-lg"
                        value={formData.country}
                        onChange={handleChange}
                      />
                      <label className="form-label" for="typeEmailX">
                        Country
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        //value="IMG"
                        className="form-control form-control-lg"
                        onChange={(e)=> setAvatar(e.target.files[0])} 
                      />
                      <label className="form-label" for="typeEmailX">
                        Profile Picture
                      </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={submitUserUpdate}
                  >SUBMIT</button>
                    </div>
                  </>

                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>  
  );
};

export default UserProfile;
