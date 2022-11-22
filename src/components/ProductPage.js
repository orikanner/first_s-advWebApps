import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import Product from './Product';
import productListJSON from '../productListJSON.json'



export default function ProductPage({}) {
    const { name } = useParams();
  
    const pr = productListJSON.find(prod => prod.name == name)
  
    if (!pr) return <p>page not found...</p>
  
    return <Product product={pr} />
  
  
  }