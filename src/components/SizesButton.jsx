import React from 'react'
import styles from './SizesButton.module.css'

function SizesButton({children}) {
  return (
    <button className={styles.sizeBtn}>{children}</button>
  )
}

export default SizesButton