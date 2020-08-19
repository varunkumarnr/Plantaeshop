import Axios from "axios"
import { CART_ADD_ITEM } from "../constants/productconstants";

const addtocart = (productId,qty) =>async (dispatch) => {
  try {
       const {data} = await Axios.get('/api/products/'+ productId);
       dispatch({
           type: CART_ADD_ITEM,payload: {
               product: data.id,
               name: data.name,
               image : data.image,
               price: data.price,
               countInStock: data.countInStock,
               rating: data.rating,
               qty
           }
       })
  } catch (error) {
      
  }
}
export default addtocart