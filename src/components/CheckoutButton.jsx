import React from 'react'
import styles from './CheckoutButton.module.css'
import { Link } from 'react-router-dom'

function CheckoutButton({onClick}) {
  return (
    <Link to={'/checkout'} onClick={onClick}><button className={styles.checkout}>PROCEED TO CHECKOUT</button></Link>
  )
}

export default CheckoutButton