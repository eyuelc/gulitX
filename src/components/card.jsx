import React from 'react';

import star from '../assets/img/star.png';
import cart from '../assets/img/cart.png';
import AddToCart from './addToCart.jsx';

function calcPerc(discountPrice, originalPrice) {
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

function Card(props) {
    return (
        <div className="card relative h-[350px] w-[230px] bg-white shadow-lg rounded-lg m-4 p-4 flex flex-col items-center relative text-black pt-[200px]">
            {props.hasDiscount && (
                <span className="bg-red-500 rounded-[50%] text-[12px] text-white p-[0.3rem] absolute top-[10px] left-0 z-50">
                    {calcPerc(props.discount, props.price)}% Off
                </span>
            )}
            <img src={props.image} alt="" className="absolute top-0 w-full h-[200px] object-cover rounded-t-[0.5rem] shadow-lg" />
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <p>{props.name}</p>
                    <div className="flex">
                        {[...Array(props.rating)].map((_, i) => (
                            <img
                                key={i}
                                src={star}
                                alt=""
                                className="h-[1rem] w-[1rem] mr-[0.2rem]"
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    {props.hasDiscount ? (
                        <>
                            <p className='text-red-600'>{props.discount}Br</p>
                            <p className='line-through text-gray-600'>{props.price}Br</p>
                        </>
                    ) : (
                        <p className='text-red-600'>{props.price}Br</p>
                    )}
                </div>
            </div>
            <div className='flex flex-col items-start w-full'>
                <p className='text-[12px] text-orange-600'>{props.marketplaceName}</p>
                <p className='text-[12px] text-orange-600'>{props.distancekm}KM away</p>
            </div>
            <AddToCart id={props.id}/>
        </div>
    )
}

export default Card;