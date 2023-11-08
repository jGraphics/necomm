import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [paymentInfo, setPaymentInfo] = useState({});

  const handlePayment = () => {
    axios.post('http://localhost:3001/api/v1/payment', paymentInfo)
      .then(response => {
        console.log('Payment successful');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setPaymentInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <div>
      <h1>Payment</h1>
      <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} />
      <input type="text" name="expirationDate" placeholder="Expiration Date" onChange={handleChange} />
      <input type="text" name="cvv" placeholder="CVV" onChange={handleChange} />
      <button onClick={handlePayment}>Submit Payment</button>
    </div>
  );
};

export default PaymentForm;