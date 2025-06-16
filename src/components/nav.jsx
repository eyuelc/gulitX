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
        <div className="flex w-full h-[60px] justify-between items-center px-[30px]">
            <img src={logo} alt="GulitX Logo" className="h-[40px]" />

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
    );
}

export default Nav;
