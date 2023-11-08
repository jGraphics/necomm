import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../actions/ProductActions";
import axios from "axios";

function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    // Defining my backend API URL
    const apiUrl = 'http://localhost:3001/api/v1/products'; // Update with your actual backend URL

    // Make an Axios GET request to fetch products
    axios
      .get(apiUrl)
      .then((response) => {
        // Dispatch an action with the fetched products
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        // Handle errors or dispatch an error action
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error });
      });
  }, [dispatch]);


  return (
    <div className="row">
      {products.map(product => (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product._id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <a href="/#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList;