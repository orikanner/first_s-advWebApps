import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import Product from './Product';
import productListJSON from '../productListJSON.json'
import { MyTitle } from '../App';

const ProductExtraInfo = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size :17px;
  width:100%;
  height:15rem;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;

  img{
    max-width:10rem;
    max-height:10rem;
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: bottom;
    border: 1px solid #ddd;
    border-radius: 25%;
    padding:5px;
    margin:10px;
 }
 
`
const ProductDsc = styled.span`
    max-width: 50%;
`


export default function ProductPage({}) {
    const { name } = useParams();
  
    const pr = productListJSON.find(prod => prod.name == name)
  
    if (!pr) return <p>page not found...</p>
  
    return (
        <>
            <div>
          <MyTitle>{pr.name}</MyTitle> 
         <ProductExtraInfo>
           <ProductDsc>{pr.description}</ProductDsc>
             <div>
                <img src={pr.img}/>
                <img src={pr.secondImg}/>
             </div>
          </ProductExtraInfo>
          </div>
        </>
    )

  
  
  }