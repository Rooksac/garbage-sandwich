import React from 'react'
import OrderItem from './OrderItem'

export default function CurrentOrderContainer({currentOrders, onPlaceOrder}) {
    function handlePlaceOrder(){
        onPlaceOrder(currentOrders)
        alert("Your order has been placed! 😍🥪😍🥪")
    }
  return (
    <div className='your-orders'>
        <h1>Your Orders</h1>
        <span>
        {currentOrders.map(order=><OrderItem order = {order}/>)}
        </span>
        <button onClick = {handlePlaceOrder}>Place order</button>
    </div>
  )
}
