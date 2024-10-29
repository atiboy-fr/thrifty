import React from 'react'
import PageNav from '../components/PageNav'
import styles from './AboutUs.module.css'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <div className={styles.about}>
        <div className={styles.aboutNav}>
          <PageNav includeSearch={false} />
        </div>

        <section className={styles.aboutSection}>
        
        </section>

        <Footer />
    </div>
  )
}

export default AboutUs