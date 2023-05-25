import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
import MobileNav from '../MobileNav/MobileNav';
import { useMatchMedia } from '../../useMatchMedia';

//import MUI Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Cart from '../Cart/Cart';


const Navbar = () => {
  const isMobileResolution = useMatchMedia('(max-width:1200px)', true)
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const toggleNavigation = () => {
    setOpen(!open);
    document.body.classList.toggle('no-scroll');
  }

  const closeHandler = () => {
    setOpen(false)
    document.body.classList.remove('no-scroll');
  }
  return (
    <>
      <div className='navbar'>
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <img src="/img/en.png" alt="" />
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link className="link" to='/products/1'>Women</Link>
            </div>
            <div className="item">
              <Link className="link" to='/products/2'>Men</Link>
            </div>
            <div className="item">
              <Link className="link" to='/products/3'>Children</Link>
            </div>
          </div>
          <div className="center">
            <Link className="link" to='/'>Wolf Wears Sheep</Link>
          </div>
          <div className="right">
            <div className="item">
              <Link className="link" to='/'>Homepage</Link>
            </div>
            <div className="item">
              <Link className="link" to='/about'>About</Link>
            </div>
            <div className="item">
              <Link className="link" to='/contact'>Contact</Link>
            </div>
            <div className="item">
              <Link className="link" to='/'>Stores</Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
              <div className="cartIcon" onClick={()=>setOpenCart(!openCart)}>
                <ShoppingCartIcon />
                <span>0</span>
              </div>
            </div>
          </div>
          <div className="mobile-right">
            <TableRowsIcon onClick={toggleNavigation} />
          </div>
        </div>
      </div>
      <div className="mobile-nav">
        {open && isMobileResolution && (
          <MobileNav setClose={closeHandler} />
        )}
      </div>
      {openCart && <Cart/>}
    </>
  )
}

export default Navbar
