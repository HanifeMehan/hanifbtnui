import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type, onClick, emoji }) => {
  const upLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <div className={styles.test}>
      <button onClick={onClick} className={`${styles[type]} ${styles.btn}`}>
        {upLetter(type)} Button {emoji}
      </button>
    </div>
  )
}
