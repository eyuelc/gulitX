import react from 'react';
import broclli from '../assets/img/broclli.png';
import blueberry from '../assets/img/blueberry.png';
import pepper from '../assets/img/pepper.png';
import cow from '../assets/img/cow.png';
import egg from '../assets/img/egg.png';

function WhatWeOffer() {
    return (
        <div className="WWO grid [grid-template-columns:1.3fr_1fr] gap-4 w-[60%] h-[500px] mx-auto pt-[2rem]">
            <div className="flex items-center justify-center text-3xl font-extrabold text-green-600 hover:bg-white">
                WHAT WE OFFER
            </div>
            <div className="bg-[rgba(255,190,190,0.336)] p-4 rounded shadow row-span-2 relative">
                <h2 className="font-extrabold text-lg text-[1.4rem]">SPICES</h2>
                <p className="text-gray-600">Offer Starts at 5Br</p>
                <img src={pepper} alt="" className='h-[130px] absolute right-[10px] bottom-[10px]'/>
            </div>
            <div className="bg-[rgba(72,227,41,0.336)] p-4 rounded shadow row-span-2 relative">
                <p className='text-gray-600 font-bold'>Up to 20% off</p>
                <h2 className="font-extrabold text-lg text-[1.4rem]">VEGTABLES</h2>
                <p className="text-gray-600">Offer Starts at 30Br</p>
                <img src={broclli} alt="" className='h-[150px] absolute right-[10px] bottom-[10px]'/>
            </div>
            <div className="bg-[rgba(106,35,192,0.34)] p-4 rounded shadow relative">
                <h3 className="font-extrabold text-lg text-[1.4rem]">Fresh Fruits</h3>
                <p className="text-gray-600">Offer Starts at 50Br</p>
                <img src={blueberry} alt="" className='h-[90px] absolute right-[10px] bottom-[10px]'/>
            </div>
            <div className="bg-orange-200 p-4 rounded shadow col-span-2 relative flex flex-col items-center">
                <h3 className="font-extrabold text-lg text-[1.4rem]">DIARY & EGGS</h3>
                <p className="text-gray-600">Offer Starts at 50Br</p>
                <img src={egg} alt="" className='h-[90px] absolute left-[20px] bottom-[10px]'/>
                <img src={cow} alt="" className='h-[90px] absolute right-[20px] bottom-[10px]'/>
            </div>
        </div>
    )
}

export default WhatWeOffer;