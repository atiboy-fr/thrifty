import React from 'react'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={'/'}><h1 className={styles.logo}>Thr<span className={styles.logoSpan}>ifty</span></h1></Link>
  )
}

export default Logo