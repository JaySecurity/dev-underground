import styles from './TechBanner.module.scss';

const TechBanner = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={styles.container}>
      <div className={styles.scroll}>{children}</div>
      <div className={styles.scroll}>{children}</div>
    </div>
  );
};

export default TechBanner;
