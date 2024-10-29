import React from 'react'
import styles from './ExploreSection.module.css'
import ShopButton from './ShopButton'

function ExploreSection() {
  return (
    <section className={styles.explore} data-aos="fade-in">
        <div className={styles.fastSelling}>
            <img src="images/thrify-fastselling.jpg" alt="jean"/>
            <h3>Explore Our Exquisite Baggy <br/> Jean Collections Now!</h3>
            <ShopButton />
        </div>
    </section>
  )
}

export default ExploreSection