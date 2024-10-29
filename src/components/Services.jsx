import React from 'react'
import styles from './Services.module.css'
import { FaLock, FaMapPin, FaShoePrints, FaTruckArrowRight } from 'react-icons/fa6'

function Services() {
  return (
    <div className={styles.servicesContainer} data-aos="fade-in">
        <div>
            <FaShoePrints size={'50px'} />
            <h3>Walk in Store</h3>
            <p>Discover a world of fashion at our walk-in store. Explore, and find your perfect style</p>
        </div>

        <div>
            <FaTruckArrowRight size={'50px'} />
            <h3>Reliable Delivery</h3>
            <p>Swift shipping, accurate tracking, and timely delivery. Your order is in good hands</p>
        </div>

        <div>
            <FaLock size={'50px'} />
            <h3>Secured Payments</h3>
            <p>Shop with confidence knowing that your transactions are safeguarded.</p>
        </div>

        <div>
            <FaMapPin size={'50px'} />
            <h3>Order Tracking</h3>
            <p>Stay in the loop with our Order Tracking feature – from checkout to your doorstep.</p>
        </div>

        
    
    </div>
  )
}

export default Services