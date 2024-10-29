import React from 'react'
import styles from './ProductItem.module.css'
import SizesButton from './SizesButton'

function ProductItem({product}) {
  return (
    <div className={styles.productItem}>
        <img src={product.image} alt={product.productName} className={styles.productImg} />
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.name}>{product.productName}</h3>
        <p className={styles.price}>₦{product.price}</p>
        <div className={styles.sizes}>
          {product.sizes.map((size) => (
              <SizesButton key={size}>{size}</SizesButton>
          ))}
        </div>
    </div>
  )
}

export default ProductItem