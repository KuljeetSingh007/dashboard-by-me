import React from 'react'
import { products } from "../../data/data";
import "./Products.css";
import Button from '../button/Button';

export default function Products() {
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
                            <div className='heart flex'>{product.icon} </div>
                            <img src={product.imageSrc} alt="productImg" className='product-img' />
                            <h3>{product.title}</h3>
                        </li>
                    )
                })}
            </ul>


        </div>
    )
}
