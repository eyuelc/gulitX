import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CCard from "../components/cartCard";
import Order from "../components/orderSummery";
import groceryItems from "../assets/data";
import Hiw from "../components/howItWorks";
import empty from '../assets/img/emptyCart.png'

export default function Cart() {
  const navigate = useNavigate();
  const toShop = () => {
    navigate('/shop');
  }
  const [items, setItems] = useState([]);

  const loadItems = () => {
    const ordered = JSON.parse(localStorage.getItem("orderedItems")) || [];

    const detailed = ordered.map(order => {
      const product = groceryItems.find(p => p.id === order.id);
      return { ...product, quantity: order.quantity };
    });

    setItems(detailed);
  };

  useEffect(() => {
    loadItems();
  }, []);

  // Show "Empty Cart" message if no items
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <img src={empty} alt="" className="h-[45vh]"/>
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-6">Looks like you haven’t added any items yet.</p>
        <button
          onClick={toShop}
          className="w-[8rem] h-[2.5rem] bg-green-700 text-white font-bold rounded flex items-center justify-center cursor-pointer hover:bg-green-800"
        >
          Go to Shop
        </button>
        </div>
    );
  }

  // Normal cart UI when items exist
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="flex justify-between w-[90vw] max-w-[1200px] gap-4 mt-8">
          <div className="flex flex-col w-[65%]">
            {items.map((item, i) => (
              <CCard
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                unit={item.unit}
                distanceKm={item.distanceKm}
                price={item.price}
                quantity={item.quantity}
                onChange={loadItems} // Trigger re-fetch when updated
              />
            ))}
          </div>
          <div className="w-[30%]">
            <Order items={items} />
          </div>
        </div>
      </div>
      <Hiw />
    </div>
  );
}
