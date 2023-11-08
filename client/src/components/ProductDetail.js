import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/ProductActions.js";

function ProductDetail(props) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.find(p => p._id === props.match.params.id));

  useEffect(() => {
    dispatch(fetchProducts(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <div className="card my-3">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <a href="/#" className="btn btn-primary">Add to cart</a>
      </div>
    </div>
  );
}

export default ProductDetail;
