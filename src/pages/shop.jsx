import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/card.jsx';
import DB from '../components/discBanner.jsx';

function Shop() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchName = searchParams.get('name');

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const [minValue, setMinValue] = useState(10);
    const [maxValue, setMaxValue] = useState(800);

    useEffect(() => {
    const query = searchName ? `?name=${encodeURIComponent(searchName)}` : '';
        fetch(`http://localhost:5000/api/products${query}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Failed to fetch products", err));
    }, [searchName]);

    
    const filtered = products.filter(
        item => item.price >= minValue && item.price <= maxValue
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    function renderCards() {
        return currentItems.map((item, idx) => (
            <Card
                key={idx}
                id={item.id}
                image={`http://localhost:5000${item.image.replace('..', '')}`} 
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
        <div className="w-full mt-[3rem]">
            <div className="flex w-full">
                {/* Sidebar */}
                <div className="flex flex-col w-[20%] items-center border-gray-500 sticky top-[7rem] h-screen overflow-y-auto">
                    <div>
                        <p className="text-[1.5rem]">Categories</p>
                        <div className="flex flex-col w-full rounded [&>div]:cursor-pointer [&>div]:hover:bg-orange-50">
                            {["Vegetables", "Fruits", "Grains", "Dairy & Eggs", "Meat & Poultry"].map((cat, i) => (
                                <label key={i} className="flex p-[0.5rem] items-center gap-[1rem] cursor-pointer hover:bg-gray-100 transition rounded">
                                    <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                                    <p className="text-gray-600">{cat}</p>
                                </label>
                            ))}
                        </div>

                        {/* Price filter */}
                        <div className="flex flex-col mt-[1rem]">
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

                {/* Product Grid */}
                <div className="flex flex-col w-[85%] mb-[2rem]">
                    <div className="flex justify-center">
                        <div className='flex flex-wrap justify-center w-full'>
                            {renderCards()}
                        </div>
                    </div>

                    {/* Pagination */}
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
                                className={`px-3 py-2 rounded ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}
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
            <DB />
        </div>
    );
}

export default Shop;
