import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { allProducts } from '../dummydata/DummyData'
import styles from './ProductDetails.module.css'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import AddToCart from '../components/AddToCart'
import { useCart } from '../context/CartContextProvider'
import Counter from '../components/Counter'
import GoToCart from '../components/GoToCart'
import { FaAngleLeft } from 'react-icons/fa'

function ProductDetails() {
  const {id} = useParams()
  const [currentProduct, setCurrentProduct] = useState({})
  const {productName, image, category, price, quantity, sizes, productDetails} = currentProduct
  const {cart, addToCart, increaseQuantity, decreaseQuantity} = useCart()
  const currentQuantity = cart?.find((item) => item.id === id)?.quantity
  const navigate = useNavigate()


  const errorMessage = 'No Product of id Found'

  useEffect(function() {
    allProducts.map((item) => {
      if(item.id === id) setCurrentProduct(item)
    })
  }, [id])

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

  function handleNavigate() {
    navigate(-1)
  }

  return (
    <div className={styles.productDetails} data-aos="fade-in">
    <div className={styles.productDetailsNav}>
      <PageNav includeSearch={false} />
    </div>
    <div className={styles.productHeading}>
          <FaAngleLeft size={'40px'} onClick={handleNavigate}/>
          <h1>Product Detail</h1>
      </div>

    <section className={styles.productDetailsSection}>
      <div className={styles.detailsContainer}>
        <img src={image} alt={productName} />

        <div className={styles.textContainer}>
          <p className={styles.category}>{category}</p>
          <h2 className={styles.name}>{productName}</h2>
          <p className={styles.price}>₦{price} + <span className={styles.delivery}>Free Delivery</span></p>
          <p className={styles.details}>{productDetails}</p>

          <div className={styles.add}>
            {!currentQuantity ? <AddToCart onClick={handleAddToCart}/> :
            <Counter handleCounterDecrease={handleDecrease} handleCounterIncrease={handleIncrease} quantity={currentQuantity}/>
            }
          </div>
          <GoToCart />
        </div>
        
      </div>
    </section>
    
    <Footer />
      
    </div>
  )
}

export default ProductDetails