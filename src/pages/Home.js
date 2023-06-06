import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "../App.scss";
import { useLocation } from "react-router-dom";

const Home = () => {
  return (
    <section className="main-container">
      <ItemListContainer title="Our Products:" />
    </section>
  );
};

export default Home;
