import React from 'react'
import styles from './HeroSection.module.css'
import ShopButton from './ShopButton'

function HeroSection() {
  return (
    <section className={styles.heroSection}>
        <div>
            <p className={styles.heroParagraph}>Your Style, Elevated</p>
            <h3 className={styles.heroHeading}>Fashion That Fits Your Vibe!</h3>
            <p>Express yourself through our curated collection, Discover the latest trends and timeless classics, Discover high-quality jeans and sweatshirts at unbeatable prices, perfect for your everyday wardrobe</p>
            <ShopButton />
        </div>
    </section>
  )
}

export default HeroSection