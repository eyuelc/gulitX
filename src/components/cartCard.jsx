export default function CCard(props) {
  const { id, image, name, unit, distanceKm, price, quantity, onChange } = props;

  const updateQuantity = (newQty) => {
    const existing = JSON.parse(localStorage.getItem("orderedItems")) || [];
    const updated = existing.map(item =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    localStorage.setItem("orderedItems", JSON.stringify(updated));
    onChange(); // Force re-render
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(quantity + 1);
  };

  const handleDelete = () => {
    const existing = JSON.parse(localStorage.getItem("orderedItems")) || [];
    const updated = existing.filter(item => item.id !== id);
    localStorage.setItem("orderedItems", JSON.stringify(updated));
    onChange(); // Force re-render
  };

  return (
    <div className="flex h-[100px] border border-gray-400 w-[90%] pl-[1rem] pr-[1rem] justify-between m-[1rem] rounded-[1rem]">
      <div className="flex items-center h-full gap-[1rem]">
        <img src={image} alt={name} className="h-[70%] rounded-[0.7rem]" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-[12px]">Unit: {unit}</p>
          <p className="text-[12px]">Distance: {distanceKm} Km</p>
          <p className="font-bold">{price} Br</p>
        </div>
      </div>
      <div className="flex flex-col h-full text-red-600 justify-around items-center">
        <i
          className="fa-solid fa-trash hover:text-red-800 cursor-pointer"
          onClick={handleDelete}
        ></i>
        <div className="flex bg-orange-500 gap-[1rem] text-white p-[0.3rem] rounded-[1rem]">
          <p className="cursor-pointer pl-[0.5rem]" onClick={handleDecrease}>-</p>
          <p>{quantity}</p>
          <p className="cursor-pointer pr-[0.5rem]" onClick={handleIncrease}>+</p>
        </div>
      </div>
    </div>
  );
}
