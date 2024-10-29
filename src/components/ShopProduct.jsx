import React from 'react'
import styles from './ShopProduct.module.css'
import SizesButton from './SizesButton'
import { useCart } from '../context/CartContextProvider'
import Counter from './Counter'

function ShopProduct({product}) {


  const {image,productName,category,price,sizes,quantity,id} = product

  const {cart, addToCart, deleteFromCart, increaseQuantity, decreaseQuantity, clearCart} = useCart()

  const currentQuantity = cart?.find((item) => item.id === id)?.quantity

  function handleAddToCart() {
    const newItem = {
      image,
      productName,
      category,
      price,
      quantity: 1,
      id,
    }
    addToCart(newItem)
  }

  function handleIncrease() {
    increaseQuantity(id)
  }

  function handleDecrease() {
    decreaseQuantity(id)
  }

  return (
    <div className={styles.productItem}>
        <img src={image} alt={productName} className={styles.productImg} />
        <p className={styles.category}>{category}</p>
        <h3 className={styles.name}>{productName}</h3>
        <p className={styles.price}>₦{price}</p>
        <div className={styles.sizes}>
          {sizes.map((size) => (
              <SizesButton key={size}>{size}</SizesButton>
          ))}
        </div>
        <div>
        {!currentQuantity ? <button className={styles.addBtn} onClick={handleAddToCart}>Add to Cart</button> :
        <Counter handleCounterDecrease={handleDecrease} handleCounterIncrease={handleIncrease} quantity={currentQuantity}/>
        }
        
        </div>
    </div>
  )
}

export default ShopProduct