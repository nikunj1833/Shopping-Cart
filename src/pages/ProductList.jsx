import React, { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import ProductCart from "../components/ProductCart";

const ProductList = () => {
  const { products } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProduct = products.filter((product) => {
    const text = searchTerm.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(text) ||
      product.description.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="mt-5">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="flex items-center justify-between mt-8 mb-6">

          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
            Featured Products
          </h2>

          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow">
            {filterProduct.length} Items
          </span>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {filterProduct.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default ProductList;