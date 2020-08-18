import React from 'react';
import '../styles/cartpage.css';


function CartPage(props) {
    const productId = props.match.params.id;
    //console.log(productId);
    return (
        <div className="cartpage">
            <div className="cart-items">
            <div className = "cart title">
                     Shopping Cart
            </div>
            <div className="">
                  
            </div>
                     
            </div>
            <div className="pay-section">
                pay-section
            </div>
        </div>
    )
}

export default CartPage
