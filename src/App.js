import React from "react";
import ProductsList from "./components/ProductsList"; //useEffect when something is chaning run useEffect function
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ProductPage from "./components/ProductPage";
import productListJSON from "./productListJSON.json";



export const MyTitle = styled.h1`
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: column;
  align-items:center;

`

const MyLink = styled.a`
  margin: 1rem;
  font-family: "Courier New", Courier, monospace;
`;

const LinksBox = styled.div`
  
  height: 50px;
  width: 100%;
  display: flex;
  align-items:center;
  position: relative;
  padding: 0.004rem 0rem;
  background-color: #fff;
  color: black;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);

`;


function App() {
 

  return (
    <>
    <Router>
      <MyTitle>Check Out Our Manu</MyTitle>
      <LinksBox>
        <Link to="/">
         <><MyLink>Manu</MyLink></> 
        </Link>
      </LinksBox>
     
      <Routes>
        
        <Route
          path="/"
          element={<ProductsList productsList={productListJSON}></ProductsList>}
        />
        <Route
          path="/link"
          element={
            <>
              <ProductsList productsList={productListJSON}></ProductsList>
            </>
          }
        />
        <Route
          path="/product/:name"
          element={<ProductPage/>}
        />
      </Routes>

     

      <p>&copy; 2022</p>
      
    </Router>
    </>
  );
}

export default App;
