import React from 'react'
import Counter from './Counter'
import { useCart } from '../context/CartContextProvider'
import styles from './CartItem.module.css'

function CartItem({item}) {
    const {addToCart, deleteFromCart, increaseQuantity, decreaseQuantity, clearCart} = useCart()
    const {image, productName, category, price, quantity, sizes, id} = item
    const currentQuantity = item.quantity
    const totalItemPrice = currentQuantity * price


    function handleIncrease() {
        increaseQuantity(id)
      }
    
    function handleDecrease() {
        decreaseQuantity(id)
      }

    function handleDeleteFromCart() {
        deleteFromCart(id)
    }

  return (
    <li className={styles.cartItem}>
        <img src={image} alt={productName} />

        <div className={styles.textContainer}>
            <h2 className={styles.cartProductName}>{productName}</h2>
            <p className={styles.category}>{category}</p>
            <p className={styles.quantity}>{quantity}x</p>
            <p className={styles.price}>₦ {totalItemPrice}</p>
        </div>

        <div className={styles.cartButtons}>
            <div className={styles.delete}><button className={styles.deleteBtn} onClick={handleDeleteFromCart}>X</button></div>
            <Counter handleCounterDecrease={handleDecrease} handleCounterIncrease={handleIncrease} quantity={currentQuantity}/>
        </div>
    </li>
  )
}

export default CartItem