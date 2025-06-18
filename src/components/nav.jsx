import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/gulitX2.png';
import user from '../assets/img/user.png';
import cart from '../assets/img/cart.png';
import notf from '../assets/img/notf.png';

function Nav() {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Shop', path: '/shop' },
        { label: 'Cart', path: '/cart' },
        { label: 'My Orders', path: '/orders' },
        { label: 'Wishlist', path: '/wishlist' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-5000 bg-white border-b border-gray-300">
            {/* Full width navbar background */}
            
            {/* Inner content container (70% centered) */}
            <div className="w-[70%] mx-auto">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <img src={logo} alt="GulitX Logo" className="h-[40px]" />

                <div className='flex justify-center'>
                <input
                    type="text"
                    className='border border-gray-400 px-4 h-[40px] w-[300px]'
                    placeholder='Search on gulitX'
                />
                <button className='border border-gray-400 w-[6rem] text-white bg-orange-400'>
                    <i className="fa-solid fa-magnifying-glass"></i> Search
                </button>
                </div>

                <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-phone text-green-500 text-[1.4rem]"></i>
                <div>
                    <p className="text-sm">Get In Touch</p>
                    <p className='font-bold text-sm'>+251 912 345 678</p>
                </div>
                </div>
            </div>

            <div className='flex justify-between items-center py-2'>
                <div>
                <button className='bg-green-600 px-4 py-2 text-white'>
                    <i className="fa-solid fa-sort"></i> Browse Categories
                </button>
                </div>

                <div className="navItems flex gap-[30px]">
                {navItems.map((item) => (
                    <Link to={item.path} key={item.path} className="relative group">
                    <p className="text-gray-700 font-medium">
                        {item.label}
                    </p>
                    <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500 transition-transform duration-300 transform ${
                        currentPath === item.path
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        } origin-left`}
                    />
                    </Link>
                ))}
                </div>

                <div className="flex gap-[30px]">
                <img src={user} alt="" className="h-[20px]" />
                <img src={cart} alt="" className="h-[20px]" />
                <img src={notf} alt="" className="h-[20px]" />
                </div>
            </div>
            </div>
        </div>
        );

}

export default Nav;
