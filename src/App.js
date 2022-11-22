import React from "react";
import ProductsList from "./components/ProductsList"; //useEffect when something is chaning run useEffect function
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ProductPage from "./components/ProductPage";
import productListJSON from "./productListJSON.json";

function Comp() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("ori");

  function inc() {
    setCount(count + 1);
  }

  React.useEffect(() => {
    const intId = setInterval(() => {
      setCount(count + 1);
      
    }, 1000);

    return function cleanup() {
      clearInterval(intId);
    };
  }, []);

  return (
    <>
      <p>the count is {count}</p>
      <p>i like {count} things</p>
      <button onClick={inc}>plus</button>
      <button onClick={() => setName("boaz")}>set name</button>
    </>
  );
}


const MyLink = styled.a`
  margin: 1rem;
`;

const LinksBox = styled.div`
  margin: 1rem;
`;


function App() {
 

  return (
    <Router>
      <h1>hello</h1>
      <LinksBox>
        <Link to="/comp">
          <MyLink>Comp</MyLink>
        </Link>
        <Link to="/">
          <MyLink>Home</MyLink>
        </Link>
        <Link to="/link">
          <MyLink>ALL</MyLink>
        </Link>
      </LinksBox>
      <Routes>
        <Route path="/comp" element={<Comp />} />
        <Route
          path="/"
          element={<ProductsList productsList={productListJSON}></ProductsList>}
        />
        <Route
          path="/link"
          element={
            <>
              <ProductsList productsList={productListJSON}></ProductsList>
              <Comp />
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
  );
}

export default App;
//test one two
//ggg