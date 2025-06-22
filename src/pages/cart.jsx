import { useEffect, useState } from "react";
import CCard from "../components/cartCard";
import Order from "../components/orderSummery";
import groceryItems from "../assets/data";

export default function Cart() {
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

  return (
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
  );
}
