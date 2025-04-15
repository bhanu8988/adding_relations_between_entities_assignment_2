import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Coffee Mug",
      description: "Ceramic mug for hot drinks.",
      image: "https://via.placeholder.com/150",
      avgRating: 4.2,
      totalRatings: 10,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse.",
      image: "https://via.placeholder.com/150",
      avgRating: 3.8,
      totalRatings: 25,
    },
    // add more products if needed
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === productId) {
          const { avgRating, totalRatings } = product;
          const updatedTotal = totalRatings + 1;
          const updatedAvg =
            ((avgRating * totalRatings) + newRating) / updatedTotal;

          return {
            ...product,
            avgRating: parseFloat(updatedAvg.toFixed(1)),
            totalRatings: updatedTotal,
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="app">
      <h1>Product Ratings</h1>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRatingSubmit={handleRatingSubmit}
        />
      ))}
    </div>
  );
};

export default App;
