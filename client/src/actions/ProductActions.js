import axios from "axios";

export const fetchProducts = () => {
  return (dispatch) => {
    axios.get("/api/products")
    // export const fetchProduct = (productId) => {
    //   return (dispatch) => {
    //     axios.get(`/api/products/${productId}`)
      .then((response) => {
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
      });
  };
};
