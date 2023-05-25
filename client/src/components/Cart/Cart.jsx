import React from "react";
import './Cart.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80",
            img2: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            title: "Long Sleeve Graphic T-Shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis quasi, suscipit temporibus nostrum accusantium. Temporibus illo quasi sed sint debitis sapiente alias, quibusdam facere, natus esse impedit harum cum!",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80",
            img2: "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            title: "Coat",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis quasi, suscipit temporibus nostrum accusantium. Temporibus illo quasi sed sint debitis sapiente alias, quibusdam facere, natus esse impedit harum cum!",
            isNew: true,
            oldPrice: 22,
            price: 17
        },
    ]
    return (
        <div className="cart">
            <h1>Your Shopping Cart</h1>
            {data?.map(item=>(
                <div className="item" key={item}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,50)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlineIcon className="delete"/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">RESET CART</span>
        </div>
    );
};

export default Cart;
