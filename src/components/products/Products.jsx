import React, { useState } from 'react'
import { products } from "../../data/data";
import "./Products.css";
import Button from '../button/Button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function Products() {
    const [isHovered, setIsHovered] = useState(null);
    return (
        <div className='products'>
            <div className="heading-box flex">
                <h2>My Products</h2>
                <Button />
            </div>


            <ul className='flex products-box'>
                {products.map((product, id) => {

                    return (
                        <li key={id} className='product flex'>
                            <div onMouseEnter={() => setIsHovered(id)}
                                onMouseLeave={() => setIsHovered(null)}
                                className='heart flex'>
                                {isHovered === id ? <AiFillHeart /> : <AiOutlineHeart />}
                            </div>
                            <img src={product.imageSrc} alt="productImg" className='product-img' />
                            <h3>{product.title}</h3>
                        </li>
                    )
                })}
            </ul>


        </div>
    )
}
