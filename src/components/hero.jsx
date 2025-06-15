import react from 'react';
import hero from '../assets/img/hero2.png'
import cart from '../assets/img/cart.png'
import telebirr from '../assets/img/Telebirr.png'
import ride from '../assets/img/ride.png'
import feres from '../assets/img/feres.png'

function Hero() {
    return (
        <div className='flex flex-col justify-around items-center h-[620px] w-full relative mb-[4rem]'>
            <input
                type="text"
                className="bg-white text-black rounded-[0.7rem] px-3 py-2 w-[500px] h-[35px] mb-[2.5rem]"
                placeholder='Search on gulitX'
            />
            <div className="hero flex items-center justify-between w-full mt-[-20px]">
                <div className="flex flex-col ml-[50px] h-full w-full justify-center items-center gap-[1rem]">
                    <h1 className="text-[2rem] text-green-600 font-extrabold">
                        Shop Smart. Eat Fresh.
                    </h1>
                    <p className="text-[1rem] text-gray-600 w-[300px] ml-[20px]">
                        Carefully selected, quality-checked groceries from reliable sellers. 100% local. 100% fresh.
                    </p>
                    <button
                        className='flex items-center justify-center gap-[5px] bg-[#e6771c] w-[150px] h-[35px] rounded-[0.5rem] text-white font-extrabold cursor-pointer hover:bg-[#f0f0f0]'
                    >
                        <img src={cart} alt="" className='h-[20px]'/>
                        SHOP NOW
                    </button>
                </div>
                <img
                    src={hero}
                    alt=""
                    className='h-[500px]'
                    style={{ right: '0', top: '17%' }}
                />
            </div>

            <div className="flex flex-col w-full items-center mt-[2rem]">
                <h3 className='text-[1.3rem] font-extrabold text-green-600'>PARTNER WITH</h3>
                <div className="flex gap-[20px] mt-[10px]">
                    <img src={telebirr} alt="Telebirr" className='h-[30px] mx-2' />
                    <img src={ride} alt="Ride" className='h-[30px] mx-2' />
                    <img src={feres} alt="Feres" className='h-[30px] mx-2' />
                </div>
            </div>
        </div>
    )
}

export default Hero;