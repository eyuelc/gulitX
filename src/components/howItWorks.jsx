import react from 'react'

function Hiw () {
    return (
        <div className="HIW pt-[2rem] flex flex-col items-center">
            <h2 className='text-[2rem]'>HOW IT WORKS</h2>
            <p className='text-gray-500'>Getting fresh Ethiopian groceries deliverd has never been easier</p>
            <div className='flex w-full p-[2rem]'>
                <div className="flex flex-col items-center gap-[0.5rem]">
                    <i class="fa-solid fa-magnifying-glass bg-gradient-to-r from-blue-400 to-blue-700 text-[2.5rem] h-[70px] w-[70px] p-[1rem] rounded-[50%] text-white relative"><p className='absolute text-[10px] text-black bg-white p-[0.5rem] rounded-[50%] top-0 left-0'>1</p></i>
                    <p className='text-[1rem]'>Browse & Search</p>
                    <p className='text-[13px] text-gray-500 text-center'>Explore our wide selection of fresh Ethiopian groceries from trusted local sellers</p>
                    
                </div>
                <div className="flex flex-col items-center gap-[0.5rem]">
                    <i class="fa-solid fa-cart-shopping bg-gradient-to-r from-green-500 to-green-700 text-[2.5rem] h-[70px] w-[70px] p-[1rem] rounded-[50%] text-white relative"><p className='absolute text-[10px] text-black bg-white p-[0.5rem] rounded-[50%] top-0 left-0'>2</p></i>
                    <p className='text-[1rem]'>Add to Cart</p>
                    <p className='text-[13px] text-gray-500 text-center'>Select your favorite products and add them to your cart with just a few clicks</p>
                </div>
                <div className="flex flex-col items-center gap-[0.5rem]">
                    <i class="fa-solid fa-truck bg-gradient-to-r from-orange-400 to-orange-700 text-[2.5rem] h-[70px] w-[70px] p-[1rem] rounded-[50%] text-white relative"><p className='absolute text-[10px] text-black bg-white p-[0.5rem] rounded-[50%] top-0 left-0'>3</p></i>
                    
                    <p className='text-[1rem]'>Fast Delivery</p>
                    <p className='text-[13px] text-gray-500 text-center'>Our trusted delivery partners ensure your groceries reach you fresh and on time</p>
                    
                </div>
                <div className="flex flex-col items-center gap-[0.5rem]">
                    <i class="fa-solid fa-house bg-gradient-to-r from-purple-400 to-purple-700 text-[2.5rem] h-[70px] w-[70px] p-[1rem] rounded-[50%] text-white relative"><p className='absolute text-[10px] text-black bg-white p-[0.5rem] rounded-[50%] top-0 left-0'>4</p></i>
                    <p className='text-[1rem]'>Enjoy Fresh Food</p>
                    <p className='text-[13px] text-gray-500 text-center'>Recieve your fresh groceries at your doorstep and enjoy authentic Ethiopian flavors</p>
                </div>
                
            </div>
            <p>Ready to get started?</p>
            <button className='mb-[2rem] shop bg-gradient-to-r from-green-500 to-green-800 cursor-pointer p-[0.7rem] rounded-[1rem] text-[14px] text-white font-bold'>Start Shopping Now</button>
            
            <div className="relative w-full overflow-visible">
                <div className="clip-right-slant rounded z-50 w-[37%] h-[80px] gap-[1rem] bg-gradient-to-r from-orange-400 to-red-500 text-white p-8 flex items-center justify-end absolute top-0 left-0">
                    <i className="fa-solid fa-phone text-[1.2rem] bg-[rgba(222,222,222,0.51)] p-[1rem] rounded-full"></i>
                    <div>
                    <p>Get in touch</p>
                    <p className="text-[1.2rem] font-bold">+251-911-234-567</p>
                    </div>
                </div>

                <div className="pt-[4rem] clip-diagonal flex flex-col justify-around items-center h-[470px] bg-gradient-to-r from-green-400 to-green-800 w-full relative">
                    <p className="text-[2rem] text-white">STAY FRESH WITH GULITX</p>
                    <div className="flex text-white gap-[5rem]">
                    <div className="flex flex-col items-center">
                        <p className='text-[27px] flex items-center justify-center bg-[rgba(255,255,255,0.48)] p-[2rem] h-[30px] w-[30px] rounded-[50%]'>%</p>
                        <p className='text-[1.4rem]'>Exclusive Discounts</p>
                        <p>Up to 30% off weekly deals</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className='text-[27px] flex items-center justify-center bg-[rgba(255,255,255,0.48)] p-[2rem] h-[30px] w-[30px] rounded-[50%]'><i className="fa-solid fa-bell"></i></p>
                        <p className='text-[1.4rem]'>Fresh Arrival</p>
                        <p>Be first to know new products</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className='text-[27px] flex items-center justify-center bg-[rgba(255,255,255,0.48)] p-[2rem] h-[30px] w-[30px] rounded-[50%]'><i className="fa-solid fa-gift"></i></p>
                        <p className='text-[1.4rem]'>Recipe idea</p>
                        <p>Weekly Ethiopian cooking tips</p>
                    </div>
                    </div>
                    <input type="text" placeholder='Email' className='p-[1rem] h-[36px] w-[250px] bg-white rounded'/>
                    <button className='subbut flex items-center justify-center text-black p-[1rem] h-[36px] w-[250px] bg-gradient-to-r from-orange-300 to-orange-500 rounded cursor-pointer'>
                    Subscribe & get 20% off
                    </button>
                </div>
                </div>

        </div>
    )
}

export default Hiw;