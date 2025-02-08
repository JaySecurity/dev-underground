import styles from './TechBanner.module.scss'

const TechBanner = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default TechBanner
