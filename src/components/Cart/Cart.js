import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckOutItem from "../CheckOutItem/CheckOutItem";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import db from "../../utils/firebaseConfig";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

const Cart = () => {
  const navigate = useNavigate();
  const { clear, cartProducts,setCartProducts, totalPrice, setTotalPrice, getUser, orderID, setOrderID } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    calcTotal();
    setOrden({
      user: getUser()._id,
      store: '64222c92b498abd05d5c8aac',
      products: cartProducts.products.map((product) => {
        return {
          _id: product.product._id,
          precio: product.product.precio,
          quantity: product.quantity,
        };
      }),
      
    });

    console.log("ORDEN", JSON.stringify(orden))

    // setContador(1)
  }, [cartProducts]);

  const [outOfStock, setOutOfStock] = useState([]);

  const [orden, setOrden] = useState({
    user: getUser()._id,
    store: '641fcb0711da07bac4708d41',
    products: cartProducts.products.map((product) => {
      return {
        _id: product.product._id,
        precio: product.product.precio,
        quantity: product.quantity,
      };
    }),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData", formData)
  };
  const submitData = (e) => {
    e.preventDefault();
    setTimeout(() => {
        pushData();
    }, 4000);
  };
   
  

  const submitOrder = async () => {
    console.log("ORDEN ANTES DE ENVIAR", JSON.stringify(orden))
    console.log("antes del post!!!!")
    await fetch("https://ehqbackend-production.up.railway.app/api/orders", {
  method: "POST",
  body: JSON.stringify({
    orden
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => {
    //navigate("/Stripe");
     console.log("response del backend", json.orderID)
     console.log("user en context", getUser())
     setCartProducts({_id:getUser().cart, products:json.cart.returnCartProducts}) 
     alert("Orden Generada, ID de su orden: "+json.orderID)
     setOrderID(json.orderDetails)
     //console.log('result', result)
     navigate("/Stripe");
 
     //const userCart = setUserCart(json.user.cart)
     
     
  })
   
};
  

  const pushData = async () => {
    submitOrder()
    console.log("ORDEN GENERADA");
    //al confirmar la orden se actualiza el stock de los productos del carrito

    //sendmail();
    //fin limpio carrito
    //muestro la orden por un momento y vuelvo a la pantalla de compra
    setTimeout(() => {
      setShowModal(false);
    }, 4000);
  };
  const sendmail = () => {
    let titulo = "Detalle de su compra: ";
    let resumen = "";
    for (const producto of orden.items) {
      resumen =
        resumen +
        producto.title +
        "X " +
        producto.cant +
        "\nPrecio: " +
        producto.precio +
        "$     /";
    }
    resumen = resumen + "\n";
    let total = "Total de su compra: $" + orden.totalCompra;
    let saludo = "Equipo de ElectricHQ";
    var templateParams = {
      correo: formData.email,
      from: formData.name,
      title: titulo,
      mensaje: resumen,
      totals: total,
      greeting: saludo,
    };
    emailjs.init("WMpHeNMelJs9E2A6N");

    //send email
    emailjs.send("default_service", "template_3lckjpo", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  const getProduct = async (id) => {
    const docRef = doc(db, "productos", id);
    const docSnapshot = await getDoc(docRef);
    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    return product;
  };

  // const updateStock = () => {
  //   orden.items.forEach((element) => {
  //     const docRef = doc(db, "productos", element._id);
  //     const data = {
  //       stock:
  //         cartProducts.products.find((dato) => dato._id == element._id).stock -
  //         element.cant,
  //     };
  //     console.log("elemement on cart", element.cant);
  //     console.log("docRef", docRef);
  //     updateDoc(docRef, data).then((docRef) => {
  //       console.log("actualice stock");
  //     });
  //   });
  // };

  const handleClose = () => {
    setShowModal();
    setOutOfStock([]);
  };
  const calcTotal = () => {
    let subTotal = 0;

    cartProducts.products.map((product) => {
      subTotal = subTotal + product.product.precio * product.quantity;
    });

    setTotalPrice(subTotal);
  };

  return (
    <div className="Container">
      <h1>YOUR SUMMARY</h1>
      {cartProducts.products.map((product) => {
        return <CheckOutItem key={product.id} data={product} />;
      })}
      <div>
        <h2>{`Total: ${totalPrice}`}</h2>
      </div>
      <div className="comprar">
        <button className="btn-warning" onClick={() => setShowModal(true)}>
          GO TO PAYMENT
        </button>
      </div>
      {showModal && (
        <Modal title="CONTACT INFORMATION" close={() => handleClose()}>
          {success ? (
            <>
              <h2>
                Your order has been completed. Thanks for shopping with us!
              </h2>
              <h3>Order confirmation number : {success}</h3>
            </>
          ) : outOfStock.length > 0 ? (
            <>
              <h2>The following products has run out of stock:</h2>
              {outOfStock.map((product) => {
                return (
                  <h1>
                    {product.title} requested: {product.cant}, available:{" "}
                    {product.actualStock}{" "}
                  </h1>
                );
              })}
              <h3>Please review your order</h3>
              <Link to="/productos/all">
                <li>
                  <button>BACK TO PRODUCTS</button>
                </li>
              </Link>
            </>
          ) : (
            <form onSubmit={submitData}>
              {console.log("user en modal", getUser())}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                value={`${getUser().first_name} ${getUser().last_name}`}
              ></input>
              <input
                type="number"
                name="phone"
                placeholder="Your phone number"
                onChange={handleChange}
                value={`123123`}
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                value={`${getUser().email}`}
              ></input>
              <button type="submit">Enviar</button>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Cart;
