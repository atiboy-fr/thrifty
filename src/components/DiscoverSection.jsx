import React from 'react'
import styles from './DiscoverSection.module.css'
import ShopButton from './ShopButton'

function DiscoverSection() {
  return (
    <section className={styles.discoverContainer}>
      <div className={styles.firstSection}>
        <p className={styles.headline}>Your style, Reimagined</p>
        <h3 className={styles.subHeadline}>Express yourself through our curated collection</h3>
        <p className={styles.description}>Dive into our treasure trove of secondhand fashion! Discover one-of-a-kind pieces, from vintage classics to modern trends. Our collection features a wide range of sweatshirts, jeans, t-shirts, and caps, all carefully curated for your style</p>
        <ShopButton />
      </div>

      <img src="images/thrifty-discoverside.png" alt="sweatshirts jeans and snapbacks" className={styles.secondSection}/>
    </section>
  )
}

export default DiscoverSection