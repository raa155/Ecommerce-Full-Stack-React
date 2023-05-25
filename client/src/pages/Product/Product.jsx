import React, {useState} from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0); 
  const [quantity, setQuantity] = useState(1);

  const images = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi porro sit libero iure beatae fugiat explicabo odio natus eius, velit, labore assumenda, neque quod! At quo expedita aut dolorem quos!</p>
        <div className="quantity">
          <button onClick={e=>setQuantity(quantity === 1 ? 1: quantity-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={e=>setQuantity(quantity+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/> Add to Cart
        </button>
        <div className="links">
          <div className="item"><FavoriteBorderIcon/> Add to Wishlist</div>
          <div className="item"><BalanceIcon/> Add to Compare</div>
        </div>
        <div className="info">
          <span>Vendor:Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>Description</span>
          <hr align="left"/>
          <span>Additional Information</span>
          <hr align="left"/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}


export default Product;
