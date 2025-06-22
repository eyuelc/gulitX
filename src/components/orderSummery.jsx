export default function Order({ items }) {
  const deliveryFee = 15;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-gray-200 w-full border-2 border-green-700 rounded-[1rem] flex flex-col p-[1rem] items-center">
      <p className="text-[1.2rem] font-bold mb-4">Order Summary</p>

      <div className="w-full flex flex-col gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <p className="font-bold">{item.name}</p>
              <p>{item.quantity} × {item.unit}</p>
            </div>
            <p className="font-bold">{item.price * item.quantity} Br</p>
          </div>
        ))}
      </div>

      <hr className="w-full my-2" />

      <div className="flex justify-between w-full">
        <p>Delivery Fee</p>
        <p className="font-bold">{deliveryFee} Br</p>
      </div>

      <hr className="w-full my-2" />

      <div className="flex justify-between w-full mb-4">
        <p>Total</p>
        <p className="font-bold">{total} Br</p>
      </div>

      <div className="bg-orange-500 w-[50%] p-[0.5rem] flex items-center justify-center rounded-[1.3rem] hover:bg-orange-700 cursor-pointer">
        <p className="text-white font-bold">Checkout</p>
      </div>
    </div>
  );
}
