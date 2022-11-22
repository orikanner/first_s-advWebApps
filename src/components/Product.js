import React from 'react'
import styled from 'styled-components'
import {  Link } from "react-router-dom";
const ProductBox = styled.div`
  padding: 1rem;
  background-color: gray;
  width: fit-content;
  margin: 3rem;

  display: flex;
  flex-direction: row;
  gap: 26px;

  width: 90%;

  justify-content: space-between;
  align-items: center;
  border-radius: 3% ;

  img {
    width: 100px;
    height: 100px;
  }

  p {
    margin-left: 2%;
    color: black;
  }
`;

export default function Product({product}) {  
  console.log(product.img);
  return (
    <>
    <ProductBox>
      <p>
          
         <Link to={product.pageLink}>{product.name} </Link> <br/>
          {product.price} $
      </p>
      <img src={product.img}></img>
    </ProductBox>
    </>
  )
}
