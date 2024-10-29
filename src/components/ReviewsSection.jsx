import React, { useState } from 'react'
import styles from './ReviewsSection.module.css'


const reviews = [
    {
        customerName: 'Mirah',
        location: 'Lagos',
        reviewComment: "I absolutely love this store! Their selection is amazing, and the quality of the clothes is fantastic. I found the perfect outfit for my friend's wedding and received so many compliments. Highly recommended!",
        ratings: '⭐⭐⭐⭐⭐',
        id: '001',
    },

    {
        customerName: 'Ebuka',
        location: 'Imo',
        reviewComment: "I'm always impressed with the customer service at this store. The staff is incredibly helpful and always willing to go the extra mile. I recently had a question about a specific item and they were able to find it for me even though it was sold out online. Thank you!",
        ratings: '⭐⭐⭐⭐⭐',
        id: '002',
    },

    {
        customerName: 'Danjuma',
        location: 'Abuja',
        reviewComment: "This store has the best-curated collection of trendy clothing. I always find something new and exciting to add to my wardrobe. The prices are reasonable, and the quality is excellent. I'll definitely be back",
        ratings: '⭐⭐⭐⭐⭐',
        id: '003',
    },

    {
        customerName: 'Toun',
        location: 'Ogun',
        reviewComment: "I'm so happy I discovered this store. Their online shopping experience is just as great as shopping in person. The website is easy to navigate, and the shipping is always fast. I've never been disappointed with my purchases.",
        ratings: '⭐⭐⭐⭐⭐',
        id: '004',
    },

    
]

// const backGroundImages = ['images/thrify-reviews0.webp', 'images/thrifty-reviews1.webp', 'images/thrify-reviews2.webp', 'images/thrifty-reviews3.webp' ]

function ReviewsSection() {
    const [current, setCurrent] = useState(0)
    

    function handleDecrease() {
        setCurrent((cur) => cur > 0 ? cur - 1 : 3)
    }

    function handleIncrease() {
        setCurrent((cur) => cur < 3 ? cur + 1 : 0)
    }

  return (
    <section className={styles.review} data-aos="fade-in">
        <button onClick={handleDecrease}>&larr;</button>

        <div className={styles.reviewContainer}>
            <p className={styles.ratings}>-{reviews[current].ratings}-</p>
            <h3 className={styles.comment}>&quot;{reviews[current].reviewComment}&quot;</h3>
            <p className={styles.customerName}>-{reviews[current].customerName}-, {reviews[current].location}</p>
        </div>

        <button onClick={handleIncrease}>&rarr;</button>
    </section>
  )
}

export default ReviewsSection