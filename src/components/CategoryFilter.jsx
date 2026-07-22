import React from "react";
import { initialProducts } from "../data/product";

const availableCategory = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">

      {availableCategory.map((category) => (

        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition

          ${selectedCategory === category
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
            }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
};

export default CategoryFilter;