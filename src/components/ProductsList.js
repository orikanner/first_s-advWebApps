import React from 'react'
import Product from './product/Product'

export default function ProductsList({productsList}) {
  return (
    productsList.map(pr => {
      return <Product key={pr.name}  product ={pr}/>
      } )
  )
}
