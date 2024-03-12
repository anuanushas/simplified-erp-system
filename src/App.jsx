import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Product from "./pages/Product";
import Provider from "./Context/ContextApi";

const App = () => {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />

            <Route path="orders" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
