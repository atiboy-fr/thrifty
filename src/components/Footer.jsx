import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerMenus}>
            <div>
                <h3>Menu</h3>
                <Link to={'/'}><p>Home</p></Link>
                <Link to={'/shop'}><p>Shop</p></Link>
                <Link to={'/about'}><p>About us</p></Link>
                <Link to={'/contact'}><p>Contact us</p></Link>
            </div>

            <div>
                <h3>Categories</h3>
                <p>Jeans</p>
                <p>Sweatshirts</p>
                <p>Snapbacks</p>
                <p>Tees</p>
            </div>

            <div>
                <h3>Resources</h3>
                <p>FAQ</p>
                <p>Contact Support</p>
                <p>Inquiry</p>
                <p>Returns</p>
            </div>

            <div>
                <h3>Social Media</h3>
                <p>Instagram</p>
                <p>Tiktok</p>
                <p>Whatsapp</p>
                <p>Facebook</p>
            </div>
        </div>

        <div className={styles.copyright}>
            <p>Copyright © 2024 Thrifty Store | Powered by Dev Ati</p>
        </div>
    </footer>
  )
}

export default Footer