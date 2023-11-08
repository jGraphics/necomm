import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({});

  const handleCheckout = () => {
    axios.post('http:localhost:3001/api/v1/checkout', shippingInfo)
      .then(response => {
        console.log('Order placed successfully');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setShippingInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;