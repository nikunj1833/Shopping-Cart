import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCart = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-3xl border border-blue-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">

      <Link
        to={`/product/${product.id}`}
        className="block overflow-hidden bg-slate-100"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition duration-500"
        />
      </Link>

      <div className="p-5">

        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
          {product.category}
        </span>

        <Link to={`/product/${product.id}`}>

          <h3 className="text-lg sm:text-xl font-bold text-slate-800 hover:text-blue-600 transition line-clamp-1">
            {product.name}
          </h3>

        </Link>

        <p className="mt-3 text-sm text-gray-500 line-clamp-2 min-h-[42px]">
          {product.description}
        </p>

        <div className="mt-5">

          <span className="text-2xl font-black text-blue-600">
            ₹{product.price.toFixed(2)}
          </span>

        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3 font-bold transition-all duration-300"
        >
          <ShoppingCart size={20} />
          Add To Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCart;