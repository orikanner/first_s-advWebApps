import React from 'react'
import styled from 'styled-components'
import {  Link } from "react-router-dom";
const ProductBox = styled.div`
  
  padding: 1rem;

  
  
  margin-top:3rem ;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 26px;
  width: 95%;
  

  justify-content: space-between;
  align-items: center;// works the ops of our flex-direction 
  box-shadow: 0 1.75px 1.75px 1.75px rgba(9, 9, 9, 0.23);

  img {
    max-width:25%;
    max-height:25%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: bottom;
    border: 1px solid #ddd;
    border-radius: 25%;
    padding:5px;
  }
  img:hover{
    box-shadow:0 0 3px 2px rgba(0, 140, 186, 0.5);
  }
  
  p {
    margin-left: 2%;
    color: black;
    font-family: arial;
  }
  
    
  
`;

export default function Product({product}) {  
  
  return (
    <>
    <ProductBox>
      <p>
         <Link to={product.pageLink}><><h3>{product.name}</h3></> </Link> <br/>
          {product.price} $
      </p>
      <img src={product.img}></img>
    </ProductBox>
    </>
  )
}
