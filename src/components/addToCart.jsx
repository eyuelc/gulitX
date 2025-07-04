import React, { useState, useEffect } from "react";

export default function AddToCart({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  // 🟡 Only fetch product when modal is opened
  useEffect(() => {
    if (!isOpen) return;

    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setProduct(null);
      });
  }, [isOpen, id]);

  const open = () => {
    setQuantity(1);
    setIsOpen(true);
  };

  const close = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  };

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAdd = () => {
    const newItem = { id: product.id, quantity };

    const existing = JSON.parse(localStorage.getItem("orderedItems")) || [];

    const index = existing.findIndex((item) => item.id === newItem.id);

    if (index !== -1) {
      existing[index].quantity += newItem.quantity;
    } else {
      existing.push(newItem);
    }

    localStorage.setItem("orderedItems", JSON.stringify(existing));
    close();
  };

  return (
    <>
      <button
        onClick={open}
        className="addCart flex items-center bg-orange-400 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 cursor-pointer"
      >
        <img
          src="http://localhost:5000/img/cart.png"
          alt="cart"
          className="h-[1rem] w-[1rem] mr-[0.2rem]"
        />
        ADD TO CART
      </button>

      {isOpen && product && (
        <div className={`fixed inset-0 z-[100000] flex items-center justify-center 
            ${isClosing ? "fade-out" : "fade-in"} backdrop-blur-sm bg-black/30`}>
          <div className={`bg-white rounded-xl shadow-xl p-5 w-[90%] max-w-[420px] relative 
              ${isClosing ? "pop-out" : "pop-in"}`}>
            <button
              onClick={close}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-[2rem] font-bold"
            >
              &times;
            </button>

            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-1">{product.category} • {product.unit}</p>

            <p className="mb-3 font-semibold text-gray-800">
              {product.hasDiscount ? (
                <>
                  <span className="line-through text-gray-400 mr-2">{product.price} ETB</span>
                  <span className="text-red-600">{product.discountPrice} ETB</span>
                </>
              ) : (
                <span>{product.price} ETB</span>
              )}
            </p>

            <div className="flex items-center mb-4">
              <button
                onClick={decrement}
                className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)))
                }
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={increment}
                className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="w-full py-2 rounded bg-orange-400 text-white hover:bg-red-600"
            >
              Confirm Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
