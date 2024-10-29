import React from 'react'
import PageNav from '../components/PageNav'
import styles from './ShopPage.module.css'
import ShowCaseProduct from '../components/ShowCaseProduct'
import { allProducts } from '../dummydata/DummyData'
import Footer from '../components/Footer'
import AllProducts from '../components/AllProducts'

function ShopPage() {
  return (
    <div className={styles.shop}>
      <div className={styles.shopNav}>
        <PageNav />
      </div>

      
      <AllProducts />

      <Footer />
    </div>
  )
}

export default ShopPage