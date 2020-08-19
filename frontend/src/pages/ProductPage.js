import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import '../styles/product.css'
import { useSelector, useDispatch } from 'react-redux';
import { detailsproduct } from '../actions/productactions';
function ProductPage(props) {
    const [qty ,setqty] = useState(1);
    const [sendasgift, setsendasgift] = useState(false);
    //console.log(qty);
    const handleClick = () => setsendasgift(!sendasgift)
    //console.log(sendasgift);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsproduct(props.match.params.id));
    return () => {
      //
    };
  }, []);
  const  handleAddtocart = () => {
      props.history.push("/cart/"+ props.match.params.id+"?qty="+qty)
  } 

    return ( 
        
        <div className="productpage">
      <div className="back">
            <Link to="/" ><p className="back-styling">back to results</p></Link>
      </div>
      {
          loading?<div>loading...</div> : error ? <div>{error}</div>:(
           <div className="product-details">
          <img className="productpage-image" src={product.image} alt={product.name}/>  
        <div className="product-desc">
            <ul>
                <div className="main-details">
                <li className="product-name">{product.name}</li>
                <li className="productRating">rating:<span className="product-rating-style"> {product.rating}  </span>  stars <span className="rating-style">{product.numrating} ratings & {product.reviews} reviews</span></li>
                <li className="product-price">Price:<span className="product-price-style">${product.price}</span> </li>
                </div>
                <li className="avalabilty">
                    {
                product.countInStock > 0 ?
                 <div className="avalabilty"> In Stock</div>
                
                   : <div className="not-avaliable avalabilty"> out of stock</div>
                    }
                 </li>
                <li className="about-product">{product.descripton}</li>
               
            </ul>
        </div>
        <div className="addtocart">
             <ul>
                 <li>
                     Price: ${product.price}
                 </li>
                 <li className="avalabilty">
                 { product.countInStock > 0 ?
                 <div className="avalabilty"> In Stock</div>
                
                   : <div className="not-avaliable avalabilty"> out of stock</div>
                 }
                 </li>
                 <li>
                     Qty: <select value={qty} onChange={(e)=>{setqty(e.target. value)}}>
                     {[...Array(product.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}

                     </select>
                 </li>
              { product.countInStock > 0 ?
                  <button onClick={handleAddtocart} className="addcartbtn">
                  Add to Cart
                  </button> : <div className="not-avaliable avalabilty"> out of stock</div>
              }
             
            <li className="gift-check" ><input type="checkbox" name="gift"   onChange={handleClick} checked={sendasgift}></input> Send as a gift </li>
            </ul>

        </div>
      </div>
          )
      }
      
      </div>
    )
}

export default ProductPage
