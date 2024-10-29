import React from 'react'
import styles from './ShopButtonDark.module.css'
import { Link } from 'react-router-dom'

function ShopButtonDark() {
  return (
    <Link to={'/shop'}>
      <button className={styles.shopBtn}>
          SHOP NOW
      </button>
    </Link>

  )
}

export default ShopButtonDark