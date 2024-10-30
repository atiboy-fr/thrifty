import React from 'react'
import styles from './AddToCart.module.css'

function AddToCart({onClick}) {
  return (
    <button className={styles.addBtn} onClick={onClick}>Add to Cart</button>
  )
}

export default AddToCart