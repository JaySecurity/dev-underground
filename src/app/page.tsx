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
        <Image className={styles.mainImage} src="/images/dev-2.webp" alt="dev-underground-rnd" width={400} height={400} priority />
        <h3>Making the Web Work!</h3>
        <p className={styles.paragraph}>Hi, I'm Jay, an experienced full-stack developer with a passion for building impactful full-stack
          applications using modern tools and frameworks. Adept at delivering high-quality solutions through
          meticulous attention to detail, strong organizational skills, and a collaborative approach to problem-
          solving I'm eager to tackle challenging projects and building creative solutions. Continuous learning and a drive
          for innovation leverage my current skills while embracing opportunities for growth in the ever-evolving software engineering
          landscape.
        </p>
        <p className={styles.paragraph}>I'm proficient in multiple programming languages, frameworks, and technologies, including Python, Node.js, TypeScript, React, AWS, Docker, Git, HTML, CSS, Linux, Kubernetes, Solidity, MongoDB, etc.
          My complete resume is available <a href="/cv.pdf">here</a>.
        </p>
        <TechBanner>
          {logos.map(((item, i) => (<TechIcon key={i} image={`images/${item}.svg`} title={item} />)))}
        </TechBanner>
      </main>
    </div>
  );
}
