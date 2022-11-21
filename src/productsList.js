import React from 'react'
import product from './product'


export default function productsList({productsList}) {
  return (
//name={pr.name} price={pr.price} img = {pr.img}
    productsList.map(pr => {
      return <product name = {pr.name}>  </product>
      } )
    

  )
  
}
