import React from 'react'
import OrderItem from './OrderItem'

export default function CurrentOrderContainer({currentOrders, onPlaceOrder}) {
    function handlePlaceOrder(){
      fetch("http://localhost:4000/orderHistory", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(currentOrders)
    })
    .then(res=>res.json())
    .then(data=>console.log('success', data))
        onPlaceOrder(currentOrders)
        alert("Your order has been placed! 😍🥪😍🥪")
    }
  return (
    <div className='your-orders'>
        <h1>Your Orders</h1>
        <span>
        {currentOrders.map(order=><OrderItem order = {order}/>)}
        </span>
        <p>Total:${currentOrders.length*15}</p>
        <button onClick = {handlePlaceOrder}>Place Order</button>
    </div>
  )
}
