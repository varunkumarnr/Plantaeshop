
import React, { useState ,  useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { listProducts } from '../actions/productactions';

function HomePage(props) {
   
    const productList = useSelector(state => state.productList);
    const {products , loading ,error} = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        }
    }, [])
    
    return (
        loading?<div>loading...</div> : error ? <div>{error}</div>:
        <div>
            <ul className="products">
                {
              products.map(product=>
                <li key={product.id}>
                    <div className="product">
                    <Link to={'/product/'+product.id}> <img className="product-image" src={product.image} alt="Image of product" /></Link>
                        <div className="text-container">
                        <div className="product-item product-name"><Link to={'/product/'+product.id}>{product.name}</Link></div>
                        <div className="product-item product-category">{product.category}</div>
                        <div className="product-item product-price">${product.price}</div>
                        <div className="product-item product-rating"><span className="rating-container">{product.rating}</span> stars</div>
                        </div>
                        
                    </div>
                </li>
                )}
            
                
            </ul>
        </div>
    )
}

export default HomePage
