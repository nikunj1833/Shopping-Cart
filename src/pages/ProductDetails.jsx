import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/product";
import {
  ChevronLeft,
  Tag,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const { addToCart } = useCart();

  useEffect(() => {
    setProduct(initialProducts.find((data) => data.id == id));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-blue-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef6ff] via-[#f8fbff] to-white py-10">

      <div className="max-w-7xl mx-auto px-5">

        {/* Back */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-8"
        >
          <ChevronLeft size={20} />
          Back to Products
        </Link>

        {/* Card */}

        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-10 p-6 md:p-10">

            {/* Image */}

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl flex items-center justify-center p-10">

              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md h-[420px] object-contain hover:scale-105 transition duration-500"
              />

            </div>

            {/* Info */}

            <div className="flex flex-col">

              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                <Tag size={16} />
                {product.category}
              </span>

              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-5 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}

              <div className="flex items-center gap-2 mt-4">

                <Star
                  className="fill-yellow-400 text-yellow-400"
                  size={20}
                />

                <span className="font-semibold text-gray-700">
                  4.8
                </span>

                <span className="text-gray-400">
                  (120 Reviews)
                </span>

              </div>

              {/* Price */}

              <div className="flex items-end gap-4 mt-6">

                <h2 className="text-5xl font-black text-blue-700">
                  ₹{product.price.toFixed(2)}
                </h2>

                <span className="text-xl line-through text-gray-400">
                  ₹{Math.round(product.price * 1.25)}
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  20% OFF
                </span>

              </div>

              {/* Description */}

              <p className="mt-8 text-gray-600 leading-8 text-lg">
                {product.description}
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-3 gap-4 mt-10">

                <div className="border border-blue-100 rounded-2xl p-5 text-center">

                  <ShieldCheck className="mx-auto text-blue-600 mb-3" />

                  <h3 className="font-bold">
                    1 Year Warranty
                  </h3>

                </div>

                <div className="border border-blue-100 rounded-2xl p-5 text-center">

                  <Truck className="mx-auto text-blue-600 mb-3" />

                  <h3 className="font-bold">
                    Free Shipping
                  </h3>

                </div>

                <div className="border border-blue-100 rounded-2xl p-5 text-center">

                  <RotateCcw className="mx-auto text-blue-600 mb-3" />

                  <h3 className="font-bold">
                    7 Days Return
                  </h3>

                </div>

              </div>

              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition"
                >
                  <ShoppingCart size={22} />
                  Add To Cart
                </button>

                <Link
                  to="/"
                  className="flex-1 flex items-center justify-center py-4 rounded-2xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold transition"
                >
                  Continue Shopping
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;