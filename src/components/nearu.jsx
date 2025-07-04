import React, { useState, useEffect } from 'react';
import Card from './card';

function Nearu() {
  const [discountItems, setDiscountItems] = useState([]);

  useEffect(() => {
  fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => {
      const filtered = data
        .filter(item => item.hasDiscount)
        .sort((a, b) => {
          const percA = ((a.price - a.discountPrice) / a.price) * 100;
          const percB = ((b.price - b.discountPrice) / b.price) * 100;
          return percB - percA;
        });
      setDiscountItems(filtered);
    })
    .catch(err => console.error('Failed to fetch products:', err));
}, []);


  return (
    <div className="flex flex-col m-[2rem]">
      <div className="text-white text-xs p-[0.3rem] bg-gradient-to-r from-orange-400 to-gray-400 w-max rounded-[0.5rem] ml-[2rem]">
        NEAR YOU
      </div>
      <div className="text-2xl text-green-600 font-extrabold mt-[1rem] mb-[0.5rem] ml-[1rem]">
        HOT PICKS
      </div>
      <div className="flex flex-wrap gap-[2rem]">
        {discountItems.map((item, idx) => (
          <Card
            key={idx}
            id={item.id}
            image={`http://localhost:5000${item.image}`} 
            name={item.name}
            rating={item.rating}
            discount={item.discountPrice}
            price={item.price}
            marketplaceName={item.marketplaceName}
            distancekm={item.distanceKm}
            hasDiscount={item.hasDiscount}
          />
        ))}
      </div>
    </div>
  );
}

export default Nearu;
