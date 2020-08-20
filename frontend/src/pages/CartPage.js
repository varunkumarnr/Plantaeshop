import React, { useEffect } from 'react';
import '../styles/cartpage.css';
import { useDispatch, useSelector } from 'react-redux';
import addtocart from '../actions/CartActions';


function CartPage(props) {
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;
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
            <ul className = "cart-products"> 
              <li className="cart-items-title"> 
                   <h3 className= "cart-item-products-title">products</h3> 
                   <h3 className=" cart-items-price-title">price</h3> 
              </li>
              {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item => 
                <li className=" cart-container">
                      <img className = "cart-item-image" src = {item.image} ></img>
                      <div className="cart-item-desc">
                      <h4 className="cart-item-name"> {item.name} </h4>
                      </div>
                </li>
            )
            }
            </ul>
            
            </div>
            <div className="pay-section">
                pay-section
            </div>
        </div>
    )
}

export default CartPage
