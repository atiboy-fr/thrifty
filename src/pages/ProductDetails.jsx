import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
  const {id} = useParams()

  

  return (
    <div>
    <Link to={'/'}>back home</Link>
    <h1>{id}</h1>
    </div>
  )
}

export default ProductDetails