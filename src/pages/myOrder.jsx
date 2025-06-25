import { useEffect, useState } from "react";
import MyOrdCard from "../components/myordCard";
import groceryItems from "../assets/data";

export default function MyOrder() {
  const [pastOrders, setPastOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("pastOrders")) || [];

    // Attach item details using groceryItems
    const detailedOrders = storedOrders.map(order => {
      const detailedItems = order.items.map(orderedItem => {
        const product = groceryItems.find(p => p.id === orderedItem.id);
        return {
          ...product,
          quantity: orderedItem.quantity
        };
      });

      return {
        ...order,
        items: detailedItems
      };
    });

    setPastOrders(detailedOrders);
  }, []);

  if (pastOrders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">No Orders Yet</h1>
        <p className="text-gray-500">You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-[2rem]">
      {pastOrders
        .slice()
        .reverse()
        .map((order, index) => (
          <MyOrdCard
            key={order.id}
            id={order.id}
            orderNumber={pastOrders.length - index} // Newest order is #1
            status={order.status}
            items={order.items}
          />
      ))}
    </div>
  );
}
