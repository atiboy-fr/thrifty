import React from 'react'
import styles from './ShowCaseProduct.module.css'
import ProductItem from './ProductItem'



function ShowCaseProduct({title = 'Most Popular', showCaseProducts = showCaseProductWears}) {
  return (
    <section className={styles.showCaseProductContainer} data-aos="fade-up">
        <h2>{title}</h2>
        <div className={styles.popular}>
            {showCaseProducts.map((product) => (
                <ProductItem product={product} key={product.id}/>
            ))}
        </div>
    </section>
  )
}

export default ShowCaseProduct