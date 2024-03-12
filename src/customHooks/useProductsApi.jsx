import React, { useContext, useState } from "react";
import { Context } from "../Context/ContextApi";

const useProductsApi = () => {
  const { products, setProducts } = useContext(Context);
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
  });

  const addProduct = (e) => {
    e.preventDefault();
    const newProducts = product;
    newProducts.id = Math.random().toString();
    setProducts((prevProducts) => {
      return [newProducts, ...prevProducts];
    });

    setProduct({
      title: "",
      category: "",
      price: "",
      stock: "",
    });
  };

  const handlerDelete = (id) => {
    setProducts((newProducts) => {
      return newProducts.filter((product) => product.id !== id);
    });
  };
  return {
    products,
    setProducts,
    handlerDelete,
    addProduct,
    product,
    setProduct,
  };
};

export default useProductsApi;
