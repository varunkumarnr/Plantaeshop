import React from 'react'
import data from '../data';
function ProductPage(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=>x.id === props.match.params.id)
    return (
        
        <div>
           <h2> this is product page of  {product.name} </h2>
          </div> 
    )
}

export default ProductPage
