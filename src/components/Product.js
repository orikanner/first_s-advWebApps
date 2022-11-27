import React from 'react'
import styled from 'styled-components'
import {  Link } from "react-router-dom";
import { ProductBox } from './ProductDesign';



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
