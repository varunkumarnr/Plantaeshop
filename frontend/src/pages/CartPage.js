import React, { useEffect } from 'react';
import '../styles/cartpage.css';
import { useDispatch } from 'react-redux';
import addtocart from '../actions/CartActions';


function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    //console.log(qty);
    //console.log(productId);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addtocart(productId,qty));
        }
    },[]);
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
