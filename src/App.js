import React from "react";
import ProductsList from "./components/ProductsList"; //useEffect when something is chaning run useEffect function
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./components/productPage/ProductPage";
import productListJSON from "./productListJSON.json";

import {MyTitle,LinksBox,MyLink} from  "./publicDesign"

function App() {
 // Ling Meow

  return (
    <Router>
      <MyTitle>Check Out Our Menu</MyTitle>
      <LinksBox>
        <Link to="/">
         <><MyLink>Menu</MyLink></> 
        </Link>
      </LinksBox>
      <Routes>
        <Route
          path="/"
          element={<ProductsList productsList={productListJSON}></ProductsList>}
        />
        <Route
          path="/product/:name"
          element={<ProductPage/>}
        />
        <Route
          path="*"
          element = {<p>page not found...</p>}
          />
      </Routes>
      <p>&copy; 2022</p>
    </Router>
  );
}

export default App;
