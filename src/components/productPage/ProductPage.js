import React from 'react'
import { useParams } from "react-router-dom";
import productListJSON from '../../productListJSON.json'
import { MyTitle } from '../../publicDesign';
import { ProductBox } from './PrPageStyle';
import { ProductExtraInfo } from './PrPageStyle';
import { ProductDsc } from './PrPageStyle';

export default function ProductPage({}) {
    const { name } = useParams();
  
    const pr = productListJSON.find(prod => prod.name == name)
  
    if (!pr) return <p>page not found...</p>
  
    return (
      <ProductBox>
        <MyTitle>{pr.name}</MyTitle> 
        <ProductExtraInfo>
          <ProductDsc>{pr.description}<br></br>
            You can find a great {pr.name} at {pr.location}
          </ProductDsc>
          <div>
            <img src={pr.img}/>
            <img src={pr.secondImg}/>
          </div>
        </ProductExtraInfo>
      </ProductBox>
    )
  }