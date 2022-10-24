import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Layout from "./Router/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import OffSale from "./pages/OffSale";
import Collection from "./pages/Collections";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

import Phylosopy from "./pages/Phylosopy";

import NotFound from "./pages/NotFound";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/mardecores/mardecores/login" element={<Login />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="/mardecores/product" element={<Product />} />
					<Route path="mardecores/phylosopy" element={<Phylosopy />} />
					<Route path="/mardecores/shop" element={<Shop />} />
					<Route path="/mardecores/offsale" element={<OffSale />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
