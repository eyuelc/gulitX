import react from 'react';
import logo from '../assets/img/gulitX2.png'
import user from '../assets/img/user.png'
import cart from '../assets/img/cart.png'
import notf from '../assets/img/notf.png'

function Nav() {
    return(
        <div className="flex w-full h-[60px] justify-between items-center p-[30px] ">
            <img src={logo} alt="GulitX Logo" className="h-[40px]" />
            <div className="navItems flex gap-[30px]">
                <a href=""><p className='selected'>Home</p></a>
                <a href=""><p>Shop</p></a>
                <a href=""><p>Cart</p></a>
                <a href=""><p>My Orders</p></a>
                <a href=""><p>Wishlist</p></a>
            </div>
            <div className="flex gap-[30px]">
                <img src={user} alt="" className='h-[20px]'/>
                <img src={cart} alt="" className='h-[20px]'/>
                <img src={notf} alt="" className='h-[20px]'/>
            </div>
        </div>
    )
}

export default Nav;