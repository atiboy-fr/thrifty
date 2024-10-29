import React from 'react'
import PageNav from '../components/PageNav'
import styles from './ContactUs.module.css'
import Footer from '../components/Footer'

function ContactUs() {
  return (
    <div className={styles.contact}>
        <div className={styles.contactNav}>
          <PageNav includeSearch={false} />
        </div>

        <section className={styles.contactSection}>
        
        </section>

        <Footer />
    </div>
  )
}

export default ContactUs