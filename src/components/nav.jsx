import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Nav() {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const currentPath = location.pathname;

    const navigate = useNavigate();
    const toShop = () => {
        if (searchTerm.trim() !== '') {
            navigate(`/shop?name=${encodeURIComponent(searchTerm.trim())}`);
        } else {
            navigate('/shop');
        }
    };


    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Shop', path: '/shop' },
        { label: 'Cart', path: '/cart' },
        { label: 'My Orders', path: '/orders' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-5000 bg-white border-b border-gray-300">
            <div className="w-[70%] mx-auto">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <img src="http://localhost:5000/img/gulitX2.png" alt="GulitX Logo" className="h-[40px]" />
                <div className='flex justify-center'>
                <input
                    type="text"
                    className='border border-gray-400 px-4 h-[40px] w-[300px]'
                    placeholder='Search on gulitX'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                onClick={toShop}
                className='border border-gray-400 w-[6rem] text-white bg-orange-400 cursor-pointer'>
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
                <img src="http://localhost:5000/img/user.png"  alt="" className="h-[20px]" />
                <img src="http://localhost:5000/img/cart.png" alt="" className="h-[20px]" />
                <img src="http://localhost:5000/img/notf.png" alt="" className="h-[20px]" />
                </div>
            </div>
            </div>
        </div>
        );

}

export default Nav;
