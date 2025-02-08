import React from 'react'
import Image from 'next/image'
import styles from './TechIcon.module.scss'

interface Props {
  image: string
  title: string
}
const TechIcon = ({ image, title }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={`${title} Logo`} width={70} height={70} />
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default TechIcon
