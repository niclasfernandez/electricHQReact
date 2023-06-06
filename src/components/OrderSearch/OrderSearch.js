import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import "./OrderSearch.scss";
import db from "../../utils/firebaseConfig";
import Modal from "../Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const OrderSearch = () => {
  const [showModal, setShowModal] = useState(false);
  const [detailProducts, setDetailProducts] = useState([]);
  const [valor, setValor] = useState();
  const [success, setSuccess] = useState();
  const [detailProduct, setDetailProduct] = useState({});

  const { totalProducts } = useContext(CartContext);

  const handleClickSearch = (e) => {
    console.log("click");
    setShowModal(true);
  };
  const handleChange = (e) => {
    setValor(e.target.value);
  };
  const getProductMail = async () => {
    const q = query(
      collection(db, "ordenes"),
      where("buyer.email", "==", valor)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  };
  const getProductOrder = async () => {
    const docRef = doc(db, "ordenes", valor);
    const docSnapshot = await getDoc(docRef);
    let docRes = docSnapshot.data();
    return docRes;
  };

  const searchOrder = (e) => {
    e.preventDefault();
    if (
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)
    ) {
      let completeArray = [];
      getProductMail().then((result) => {
        if (result.docs.length != 0) {
          result.forEach((doc) => {
            let objeto = {
              id: doc.id,
              fecha: doc.data().date,
              comprador: doc.data().buyer,
              items: doc.data().items,
            };
            completeArray.push(objeto);
            setDetailProducts(completeArray);
          });
          setSuccess("mail");
        } else {
          setSuccess("sin datos");
        }
      });
    } else {
      getProductOrder().then((data) => {
        if (data != undefined) {
          setDetailProduct(data);
          setSuccess(valor);
        } else {
          setSuccess("sin datos");
          setDetailProduct({});
        }
      });
    }
    setValor("");
  };
  const newSearch = () => {
    setDetailProducts();
    setSuccess(undefined);
  };

  console.log("total Products :", totalProducts);

  return (
    <div>
      <div onClick={() => handleClickSearch()}>
        <h2>
          <i className="bi bi bi-search carritoIcon"></i>
        </h2>
      </div>
      {showModal && (
        <Modal title="Search your order" close={() => setShowModal()}>
          {success == undefined ? (
            <form action="#" id="form" className="form" onSubmit={searchOrder}>
              <input
                type="text"
                className="form__text"
                name="busqueda"
                placeholder="Enter your email"
                onChange={handleChange}
                value={valor}
              />
              <button type="submit">Search</button>
            </form>
          ) : success == "sin datos" ? (
            <>
              <button className="btn-delete-all " onClick={newSearch}>
                New Search
              </button>
              <h3>No Results</h3>
            </>
          ) : (
            success == "mail" && (
              <>
                <div>
                  <button className="btn-delete-all " onClick={newSearch}>
                    Nueva Busqueda
                  </button>
                  {detailProducts.map((pedido) => {
                    return (
                      <div className="">
                        <article>
                          <h2 className="datopedido__h2 ">
                            Order details: {pedido.id}
                          </h2>
                          <p>
                            <strong>Date: </strong>
                            {pedido.fecha}
                          </p>
                          <p>
                            <strong>Name: </strong>
                            {pedido.comprador.name}
                          </p>
                          <p>
                            <strong>Email: </strong>
                            {pedido.comprador.email}
                          </p>
                        </article>
                        <div className="cart_items">
                          <ul className="cart_list flex-column">
                            {pedido.items.map((product) => {
                              return (
                                <li
                                  className="cart_item clearfix"
                                  key={product.id}
                                >
                                  <div className="cart_item_info d-flex flex-md-row flex-column col-6 justify-content-between">
                                    <div className="cart_item_name cart_info_col">
                                      <div className="cart_item_title">
                                        Product
                                      </div>
                                      <div className="cart_item_text">
                                        {product.title}
                                      </div>
                                    </div>

                                    <div className="cart_item_quantity cart_info_col">
                                      <div className="cart_item_title">
                                        quantity
                                      </div>
                                      <div className="cart_item_text">
                                        {product.cant}
                                      </div>
                                    </div>
                                    <div className="cart_item_price cart_info_col">
                                      <div className="cart_item_title">
                                        Precio
                                      </div>
                                      <div className="cart_item_text">
                                        $ {product.precio}
                                      </div>
                                    </div>
                                    <div className="cart_item_total cart_info_col">
                                      <div className="cart_item_title">
                                        Total
                                      </div>
                                      <div className="cart_item_text">
                                        $ {product.cant * product.precio}
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )
          )}
        </Modal>
      )}
    </div>
  );
};
export default OrderSearch;
