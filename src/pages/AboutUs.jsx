import React from 'react'
import PageNav from '../components/PageNav'
import styles from './AboutUs.module.css'
import Footer from '../components/Footer'
import ShopButton from '../components/ShopButton'

function AboutUs() {
  return (
    <div className={styles.about} data-aos="fade-up">
        <div className={styles.aboutNav}>
          <PageNav includeSearch={false} />
        </div>

        <section className={styles.aboutSection}>
          <img src="../../images/thrifty-suspenders.webp" alt="" className={styles.aboutImage} />
          <div className={styles.aboutDescription}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam voluptates quos illo soluta facere nesciunt ipsam saepe nihil quo, recusandae magnam dolorum sint voluptatem unde culpa iure quidem asperiores. Corporis impedit quibusdam dolore rerum quae perferendis sequi totam beatae error maiores sit, ad illum hic perspiciatis ipsam nobis ipsa explicabo, molestiae facilis asperiores obcaecati iure ex! Earum adipisci corrupti veritatis deleniti aut, aperiam eligendi beatae sed, at aspernatur culpa nihil excepturi?</p>
            <ShopButton />
            </div>

        </section>

        <Footer />
    </div>
  )
}

export default AboutUs