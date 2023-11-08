import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/v1/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      {orders.map(order =>
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Products: {order.products.join(', ')}</p>
          <p>Price: ${order.price}</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;