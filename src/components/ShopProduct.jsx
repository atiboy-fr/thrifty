import React from 'react'
import styles from './ShopProduct.module.css'
import SizesButton from './SizesButton'
import { useCart } from '../context/CartContextProvider'
import Counter from './Counter'
import AddToCart from './AddToCart'
import { Link } from 'react-router-dom'

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
      <Link to={`/product/${id}`}>
        <img src={image} alt={productName} className={styles.productImg} />
        <p className={styles.category}>{category}</p>
        <h3 className={styles.name}>{productName}</h3>
        <p className={styles.price}>₦{price}</p>
      </Link>
        <div className={styles.sizes}>
          {sizes.map((size) => (
              <SizesButton key={size}>{size}</SizesButton>
          ))}
        </div>
        <div>
        {!currentQuantity ? <AddToCart  onClick={handleAddToCart} /> :
        <Counter handleCounterDecrease={handleDecrease} handleCounterIncrease={handleIncrease} quantity={currentQuantity}/>
        }
        
        </div>
    </div>
  )
}

export default ShopProduct