import React from 'react'

export default function product({product}) {
  return (
    <div>
        <span>
            {product.name}
            <br></br>
            {product.price} $
        </span>
        

        
    </div>
  )
}
