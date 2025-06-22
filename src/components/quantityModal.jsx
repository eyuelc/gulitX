import React from "react";

export default function QuantityModal({ product, quantity, setQuantity, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 max-w-full shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="mb-4 text-gray-700">{product.category} — {product.unit}</p>
        <p className="mb-4 font-bold text-lg">
          Price: 
          {product.hasDiscount ? (
            <>
              <span className="line-through text-gray-400 ml-1">{product.price} ETB</span>
              <span className="ml-2 text-red-600">{product.discountPrice} ETB</span>
            </>
          ) : (
            <span className="ml-1">{product.price} ETB</span>
          )}
        </p>

        <div className="flex items-center mb-6">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-12 text-center border-t border-b border-gray-300"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
          >
            +
          </button>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Add to cart logic here
              alert(`Added ${quantity} ${product.name}(s) to cart`);
              onClose();
            }}
            className="px-4 py-2 rounded bg-orange-400 text-white hover:bg-red-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
