const ProductCard = ({ name, brand, price, image }) => {
    return (
      <div className="card">
        <div className="img">
          <img src={image} />
        </div>
        <div className="details">
          <h3>{name}</h3>
          <h4>{brand}</h4>
          <h5>Rs {price}</h5>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  