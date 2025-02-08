import Image from "next/image";
import TechIcon from "@/components/techIcon/TechIcon";
import styles from "./page.module.css";
import TechBanner from "@/components/techBanner/TechBanner";

export default function Home() {
  const logos = [
    "MongoDB",
    "Node",
    "Python",
    "React",
    "TypeScript",
    "AWS",
    "Docker",
    "Git",
    "HTML",
    "CSS",
    "Linux",
    "Kubernetes",
    "Solidity",
    "Vitejs"
  ]
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome</h1>
        <h2>To The</h2>
        <Image src="/images/dev-underground-rnd.png" alt="dev-underground-rnd" width={500} height={500} />
      </main>
      <TechBanner>
        {logos.map(((item, i) => (<TechIcon key={i} image={`images/${item}.svg`} title={item} />)))}
      </TechBanner>
    </div>
  );
}
