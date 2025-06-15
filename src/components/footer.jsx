import React from "react";
import logo from '../assets/img/gulitX2.png'

function Footer(){
    return (
        <div className="flex h-[400px] bg-gradient-to-tl from-[rgb(8,18,48)] to-[rgb(123,147,213)] justify-around p-[1rem]">
            <div className="flex flex-col text-gray-300 w-[20%] gap-[1rem] items-center">
                <img src={logo} alt="" className="w-[130px] h-auto"/>
                <p> Ethiopia's premier grocery eCommerce platform, connecting you with fresh,
                    local produce and authentic Ethiopian foods from trusted sellers
                </p>
                <div className="flex text-white gap-[1rem]">
                    <i class="fa-brands fa-facebook-f text-[1.7rem] cursor-pointer"></i>
                    <i class="fa-brands fa-instagram text-[1.7rem] cursor-pointer"></i>
                    <i class="fa-brands fa-x-twitter text-[1.7rem] cursor-pointer"></i>
                    <i class="fa-brands fa-linkedin text-[1.7rem] cursor-pointer"></i>
                </div>
            </div>
            <div className="flex flex-col text-gray-300 w-[20%]  items-center [&>p:hover:not(:first-child)]:text-gray-100 [&>p:not(:first-child)]:cursor-pointer gap-[0.5rem]">
                <p className="text-[1.4rem] text-white">Quick Links</p>
                <p>Shop All Catagories</p>
                <p>Fresh Vegtables</p>
                <p>Fruits</p>
                <p>Ethiopian Spices</p>
                <p>Meat & Poultry</p>
                <p>Dairy Products</p>
                <p>Injera & Bread</p>
            </div>
            <div className="flex flex-col text-gray-300 w-[20%]  [&>p:hover:not(:first-child)]:text-gray-100 items-center [&>p:not(:first-child)]:cursor-pointer gap-[0.5rem]">
                <p className="text-[1.4rem] text-white">Company</p>
                <p>About Us</p>
                <p>How It Works</p>
                <p>Become a Seller</p>
                <p>Delivery Partners</p>
                <p>Careers</p>
                <p>Press & Media</p>
                <p>Blog</p>
            </div>
            <div className="flex flex-col text-gray-300 w-[20%]  items-center [&>p:not(:first-child)]:cursor-pointer gap-[0.5rem]">
                <p className="text-[1.6rem] text-white">Contact & Support</p>
                <div className="flex justify-center items-center gap-[1rem]">
                    <i class="fa-solid fa-phone text-green-500 text-[1.5rem]"></i>
                    <div className="flex flex-col">
                       <p>Customer Service</p> 
                       <p className="text-white">+251 911 123 456</p>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center gap-[1rem]">
                    <i class="fa-solid fa-envelope text-green-500 text-[1.5rem]"></i>
                    <div className="flex flex-col">
                       <p>Email Support</p> 
                       <p className="text-white">help@gulitx.com</p>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center gap-[1rem]">
                    <i class="fa-solid fa-location-dot text-green-500 text-[1.5rem]"></i>
                    <div className="flex flex-col">
                       <p>Head Office</p> 
                       <p className="text-white">Bole, Addis Ababa Ethiopia</p>
                    </div>
                    
                    
                </div>
                <div className="flex flex-col text-gray-300 [&>p:not(:first-child)]:text-[13px] [&>P:hover:not(:first-child)]:text-gray-100 [&>p:not(:first-child)]:cursor-pointer gap-[0.5rem]">
                        <p className="text-[1.2rem] text-white">Support Links</p>
                        <p>Help Center</p>
                        <p>Track Your Order</p>
                        <p>Return Policy</p>
                        <p>Contact Support</p>
                        
                </div>
            </div>

                                                 
        </div>
    )
}

export default Footer;