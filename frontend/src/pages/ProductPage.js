import React from 'react'
import data from '../data';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import '../styles/product.css'
function ProductPage(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=>x.id === props.match.params.id)
    return ( 
        <div className="productpage">
      <div className="back">
            <Link to="/" ><p className="back-styling">back to results</p></Link>
      </div>
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
                     {product.Avalabilty}
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
                     {product.Avalabilty}
                 </li>
                 <li>
                     Qty: <select>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                     </select>
                 </li>
                 
            
             <button className="addcartbtn">
                      Add to Cart
            </button>
            <li className="gift-check" ><input type="checkbox" name="gift"   value="gift"></input> Send as a gift </li>
            </ul>

        </div>
      </div>
      </div>
    )
}

export default ProductPage
