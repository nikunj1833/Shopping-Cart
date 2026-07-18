import React, { useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { useCart } from '../context/CartContext'
import ProductCart from '../components/ProductCart';

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

  console.log(filterProduct);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <h2 className='text-2xl text-white font-extrabold mx-auto px-4 md:px-4 pt-8'>
          Featured Gear ({filterProduct.length} Items)
        </h2>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {filterProduct.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default ProductList;