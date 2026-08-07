import "./ProductsList.css";

const ProductsList = ({ loadingProducts }) => {
  if (loadingProducts) {
    return <div className="loading"></div>;
  } else {
    return <div>Listado de Productos</div>;
  }
};

export default ProductsList;
