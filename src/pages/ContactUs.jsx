import React, { useRef, useState } from 'react'
import PageNav from '../components/PageNav'
import styles from './ContactUs.module.css'
import Footer from '../components/Footer'

function ContactUs() {
  const [email, setEmail] = useState('')
  const inputRef = useRef(null)


  function handleClick() {
    if(!email) return

    setTimeout(() => {
      setEmail('')
      inputRef.current.focus()
    }, 3000)
  }

  return (
    <div className={styles.contact}>
        <div className={styles.contactNav}>
          <PageNav includeSearch={false} />
        </div>

        <section className={styles.contactSection}>

        <div className={styles.contactNewsLetter}>
          <h2>Suscribe to our News Letter to stay updated on trends!!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptates odit! Assumenda est eveniet dolore laborum in accusamus perferendis provident numquam, amet ad animi fugit accusantium praesentium! Totam, ea quidem.</p>
          <p>Suscribe by typing your email</p>
          <div className={styles.suscribe}>
            <input type="email" ref={inputRef} value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleClick}>&rarr;</button>
          </div>
        </div>
        
        </section>

        <Footer />
    </div>
  )
}

export default ContactUs