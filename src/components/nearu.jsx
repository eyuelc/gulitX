import react from 'react';
import Card from './card'
import groceryItems from '../assets/data'

function renderDiscountCards() {
    return groceryItems
        .filter(item => item.hasDiscount)
        .sort((a, b) => {
            const percA = ((a.price - a.discountPrice) / a.price) * 100;
            const percB = ((b.price - b.discountPrice) / b.price) * 100;
            return percB - percA;
        })
        .map((item, idx) => (
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

function Nearu () {
    return (
        <div className="flex flex-col m-[2rem]">
            <div className="text-white text-xs p-[0.3rem] bg-gradient-to-r from-orange-400 to-gray-400 w-max rounded-[0.5rem] ml-[2rem]">
                NEAR YOU
            </div>
            <div className="text-2xl text-green-600 font-extrabold mt-[1rem] mb-[0.5rem] ml-[1rem]">
                HOT PICKS
            </div>
            <div className="flex flex-wrap gap-[2rem]">
                {renderDiscountCards()}
            </div>
        </div>
        
    )
}

export default Nearu;