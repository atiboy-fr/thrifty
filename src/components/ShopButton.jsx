import React from 'react'
import styles from './ShopButton.module.css'
import { Link } from 'react-router-dom'

function ShopButton() {
  return (
    <Link to={'/shop'}>
      <button className={styles.shopBtn}>
          SHOP NOW
      </button>
    </Link>

  )
}

export default ShopButton