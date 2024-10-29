import React from 'react'
import styles from './CartPage.module.css'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContextProvider'
import CartItem from '../components/CartItem'
import ShopButton from '../components/ShopButton'
import ShopButtonDark from '../components/ShopButtonDark'
import CheckoutButton from '../components/CheckoutButton'

function CartPage() {
  const {cart} = useCart()
  const totalCartPrice = cart.reduce((acc, item) => (item.quantity * item.price) + acc, 0)

  return (
    <div className={styles.cart}>
        <div className={styles.cartNav}>
          <PageNav includeSearch={false} />
        </div>

        <h1 className={styles.cartHeading}>Cart</h1>

        <section className={styles.cartSection}>
        {!cart.length ? 
        <div className={styles.cartMessage}>
          <p>No Items in Cart Yet</p>
          <ShopButtonDark />
        </div> :
          <>
            <ul className={styles.cartContainer}>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </ul>
            <div className={styles.cartTotal}>
              <h2>Cart Total</h2>
              <>
                <p className={styles.price}>SUBTOTAL PRICE: ₦ <span>{totalCartPrice}</span></p>
                <p className={styles.price}>TOTAL PRICE: ₦ <span>{totalCartPrice}</span></p>
              </>
              <CheckoutButton />
            </div>
          </>
          }
        </section>

        <Footer />
    </div>
  )
}

export default CartPage