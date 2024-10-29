import React from 'react'
import styles from './Counter.module.css'

function Counter({handleCounterDecrease,quantity, handleCounterIncrease}) {
  return (
    <div className={styles.counterContainer}>
        <button onClick={handleCounterDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleCounterIncrease} >+</button>
    </div>
  )
}

export default Counter