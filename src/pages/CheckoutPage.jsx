import React from 'react'
import styles from './CheckoutPage.module.css'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'

function CheckoutPage() {
  return (
    <div className={styles.checkout}>
        <div className={styles.checkoutNav}>
          <PageNav includeSearch={false} />
        </div>

        <section className={styles.checkoutSection}>
        
        </section>

        <Footer />
    </div>
  )
}

export default CheckoutPage