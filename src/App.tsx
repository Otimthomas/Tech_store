import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CartPage from "./Pages/CartPage";
import ProductsPage from "./Pages/ProductsPage";
import SingleProductPage from "./Pages/SingleProductPage";
import ContactPage from "./Pages/ContactPage";
import Default from "./Pages/Default";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SideCart from "./Components/SideCart";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<Default />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
