import React from 'react'
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header
