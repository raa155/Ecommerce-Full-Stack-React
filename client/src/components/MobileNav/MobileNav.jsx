import React, { useEffect, useState } from 'react'
import './MobileNav.scss'
import { Link } from 'react-router-dom';

//import MUI Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CloseIcon from '@mui/icons-material/Close';
import Cart from '../Cart/Cart';



const MobileNav = (props) => {

   const [openCart, setOpenCart] = useState(false);

   useEffect(() => {
      let url = window.location.href.split("/");
      let target = url[url.length - 1].toLowerCase();
      let element = document.getElementById(target);
      element && element.scrollIntoView({ behavior: "smooth", block: "start" });
   }, []);
   return (
      <div className='mobilenav'>
         <div className="wrapper">
               <div className="top">
                  <Link onClick={props.setClose} className="link" to='/'>Wolf Wears Sheep</Link>
               </div>
               <div className="center">
                  <div className="item">
                     <img src="/img/en.png" alt="" />
                     <KeyboardArrowDownIcon />
                  </div>
                  <div className="item">
                     <span>USD</span>
                     <KeyboardArrowDownIcon />
                  </div>
                  <div className="item">
                     <Link onClick={props.setClose} className="link" to='/products/1'>Women</Link>
                  </div>
                  <div className="item">
                     <Link onClick={props.setClose} className="link" to='/products/2'>Men</Link>
                  </div>
                  <div className="item">
                     <Link onClick={props.setClose} className="link" to='/products/3'>Children</Link>
                  </div>
               </div>
               <div className="bottom">
                  <div className="item">
                     <Link onClick={props.setClose} className="link" to='/'>Homepage</Link>
                  </div>
                  <div className="item">
                     <Link onClick={props.setClose} className="link" to='/'>About</Link>
                  </div>
                  <div className="item">
                     <Link onClick={props.setClose} className="link" to='/'>Contact</Link>
                  </div>
                  <div className="item">
                     <Link onClick={props.setClose} className="link" to='/'>Stores</Link>
                  </div>
                  <div className="icons">
                     <SearchIcon />
                     <PersonOutlineIcon />
                     <FavoriteBorderIcon />
                     <div className="cartIcon">
                        <ShoppingCartIcon onClick={()=>setOpenCart(!openCart)} />
                        <span>0</span>
                     </div>
                  </div>
               </div>
               {openCart && <Cart/>}
            </div>
         </div>
   )
}

export default MobileNav
