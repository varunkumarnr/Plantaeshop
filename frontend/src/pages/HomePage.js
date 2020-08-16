
import React, { useState ,  useEffect } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage(props) {
    const[products, setProduct] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
        fetchData();
        return() => {
            //
        }
    },[])
    return (
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
