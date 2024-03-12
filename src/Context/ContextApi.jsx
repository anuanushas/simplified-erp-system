import React, { createContext, useState } from "react";
import data from "../data/allProducts.js";
import OrderMockDataJson from "../data/OrderMockDataJson.jsx";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [ordersData, setOrdersData] = useState(OrderMockDataJson);

  const findByidProduct = (id) => {
    const product = products.find((item) => item.id === Number(id));
    return product;
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        findByidProduct,
        ordersData,
        setOrdersData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
