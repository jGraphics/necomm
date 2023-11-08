import React from "react"
import { useSelector } from "react-redux"

function ShoppingCart() {
  const cartItems = useSelector(state => state.cart)

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)}</h4>
    </div>
  )
}

export default ShoppingCart