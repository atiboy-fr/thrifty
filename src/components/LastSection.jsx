import React from 'react'
import styles from './LastSection.module.css'
import ShopButton from './ShopButton'

function LastSection() {
  return (
    <div className={styles.container} data-aos="fade-down">
        <div className={styles.textContainer}>
            <p>Explore</p>
            <h3>Your Sustainable Style Destination,</h3>
            <h3>Spectacular Fashion style!</h3>
            <p>Discover a world of sustainable fashion at our thrift store. From vintage classics to modern trends, our carefully curated collection offers something for everyone. Shop with confidence knowing you're making a positive impact on the planet while expressing your unique style</p>
            <ShopButton />
        </div>
    </div>
  )
}

export default LastSection