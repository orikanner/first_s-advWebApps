import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import Product from './Product';
import productListJSON from '../productListJSON.json'
import { MyTitle } from '../App';

const ProductBox = styled.div`
box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
margin-top:3rem ;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

`
const ProductExtraInfo = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size :17px;
  width:100%;
  height:12rem;
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
 img:hover{
    box-shadow:0 0 3px 2px rgba(0, 140, 186, 0.5);
  }
 
`
const ProductDsc = styled.span`
    max-width: 50%;
    margin:2rem;
`


export default function ProductPage({}) {
    const { name } = useParams();
  
    const pr = productListJSON.find(prod => prod.name == name)
  
    if (!pr) return <p>page not found...</p>
  
    return (
        <>
            <ProductBox>
          <MyTitle>{pr.name}</MyTitle> 
         <ProductExtraInfo>
           <ProductDsc>{pr.description}</ProductDsc>
             <div>
                <img src={pr.img}/>
                <img src={pr.secondImg}/>
             </div>
          </ProductExtraInfo>
          </ProductBox>
        </>
    )

  
  
  }