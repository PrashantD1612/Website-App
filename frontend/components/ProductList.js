const ProductList = ({ products, addToCart, removeFromCart }) => {
    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-item">
           <img src={product["Image Src"]} alt={product.Title} /> 
            <h2>{product.Title}</h2>
            <p>{product["Variant Price"]}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
  