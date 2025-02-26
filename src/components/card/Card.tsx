import React from 'react'
import styles from './card.module.scss'

interface CardProps {
  name: string;
  desc: string;

}


const Card = ({ name, desc }: CardProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="/images/dev-2.webp" alt="" />
      <div className={styles.info}>
        <h3>{name}</h3>
        {/*<h4>Description:</h4>*/}
        <p>{desc}</p>
        <h4>Technologies:</h4>
        <ul className={styles.techlist}>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Two</li>
          <li>Three</li>
          <li>Two</li>
          <li>Three</li>
          <li>Two</li>
          <li>Three</li>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <h4>Links:</h4>
        <p>Github: {`Site Here`}</p>
        <p>Live: {`Site Here`}</p>
        <h4>Login Creds:</h4>
        <p>Login: {`Username`}</p>
        <p>Password: {`Pass`}</p>
      </div>
    </div>
  )
}

export default Card
