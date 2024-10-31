import React from 'react'
import styles from './GoToCart.module.css'
import { Link } from 'react-router-dom'

function GoToCart() {
  return (
    <Link to={'/cart'}><button className={styles.btn}>Go To Cart</button></Link>
  )
}

export default GoToCart