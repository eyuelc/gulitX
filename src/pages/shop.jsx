import Card from '../components/card.jsx'
import groceryItems  from '../assets/data'

import { useState } from 'react'




function Shop () {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const [minValue, setMinValue] = useState(10);
    const [maxValue, setMaxValue] = useState(800);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = groceryItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(groceryItems.length / itemsPerPage);

    function renderCards() {
        return currentItems.map((item, idx) => (
            <Card
                key={idx}
                image={item.image}
                name={item.name}
                rating={item.rating}
                discount={item.discountPrice}
                price={item.price}
                marketplaceName={item.marketplaceName}
                distancekm={item.distanceKm}
                hasDiscount={item.hasDiscount}
            />
        ));
    }
    return (
        <div className="w-full">
            <div className="flex justify-center gap-[2rem]">
                <button className="sort h-[2rem] w-[5rem] rounded-[0.5rem] bg-gradient-to-r from-orange-400 to-orange-200 hover:bg-gray-100 cursor-pointer"><i class="fa-solid fa-sort"></i>Sort</button>
                <input
                type="text"
                className="bg-white text-black rounded-[0.7rem] px-3 py-2 w-[500px] h-[35px] mb-[2.5rem]"
                placeholder='Search on gulitX'
            />
            </div>  
            <div className="flex w-full">
                <div className="flex flex-col w-[20%] items-center border-r-2 border-gray-500">
                    <div>
                        <p className="text-[1.5rem]">Catagories</p>
                        <div className="flex flex-col w-full rounded [&>div]:cursor-pointer [&>div]:hover:bg-orange-50">
                            <div className="flex p-[0.5rem] items-center justify-between">
                                <div className="flex items-center gap-[1rem]">
                                    <input type="checkbox"  className="w-5 h-5 accent-orange-500" />
                                    <p className='text-gray-600'>Vegtables</p>
                                </div>
                            </div>
                            <div className="flex p-[0.5rem] items-center justify-between">
                                <div className="flex items-center gap-[1rem]">
                                    <input type="checkbox"   className="w-5 h-5 accent-orange-500" />
                                    <p className='text-gray-600'>Fruits</p>
                                </div>
                                
                            </div>
                            <div className="flex p-[0.5rem] items-center justify-between">
                                <div className="flex items-center gap-[1rem]">
                                    <input type="checkbox"   className="w-5 h-5 accent-orange-500" />
                                    <p className='text-gray-600'>Grains</p>
                                </div>
                                
                            </div>
                            <div className="flex p-[0.5rem] items-center justify-between">
                                <div className="flex items-center gap-[1rem]">
                                    <input type="checkbox"   className="w-5 h-5 accent-orange-500" />
                                    <p className='text-gray-600'>Diary & Eggs</p>
                                </div>
                                
                            </div>
                            <div className="flex p-[0.5rem] items-center justify-between">
                                <div className="flex items-center gap-[1rem]">
                                    <input type="checkbox"  className="w-5 h-5 accent-orange-500" />
                                    <p className='text-gray-600'>Meat & Poultry</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[1.5rem]">Price</p>
                            <div className="flex justify-between text-sm text-gray-700">
                                <span>Min: {minValue}Br</span>
                                <span>Max: {maxValue}Br</span>
                            </div>
                            <div className="relative h-0">
                                <input
                                type="range"
                                min="0"
                                max="1000"
                                step="10"
                                value={minValue}
                                onChange={(e) => setMinValue(Number(e.target.value))}
                                className="absolute w-full pointer-events-none appearance-none z-10 h-1 bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full"
                                />
                                <input
                                type="range"
                                min="0"
                                max="1000"
                                step="10"
                                value={maxValue}
                                onChange={(e) => setMaxValue(Number(e.target.value))}
                                className="absolute w-full pointer-events-none appearance-none z-20 h-1 bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full"
                                />
                                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded -translate-y-1/2"></div>
                            </div>
                            </div>

                    </div>
                    
                </div>
                <div className="flex flex-col w-full ">
                    <div className="flex justify-center">
                        <div className='flex flex-wrap w-[85%]'>
                            {renderCards()}
                        </div>
                        
                    </div>
                    <div className="flex justify-center mt-4 gap-2 [&>button]:cursor-pointer">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-orange-300 text-white rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-2 rounded ${
                                currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-100'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-orange-300 text-white rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
                </div>
                
                

            </div>
        </div>
    )
}

export default Shop;