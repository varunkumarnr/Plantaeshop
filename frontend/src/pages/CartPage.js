import React from 'react'
import { Link } from 'react-router-dom'


function CartPage(props) {
    const productId = props.match.params.id;
    //console.log(productId);
    return (
        <div className="cartpage">
            <div className="cart-items">
            <div className = "cart title">
                     Shopping Cart
            </div>

            </div>
            <div className="pay-section">

            </div>
        </div>
    )
}

export default CartPage
