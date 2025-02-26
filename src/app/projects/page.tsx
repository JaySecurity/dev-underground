import React from 'react'
import styles from './page.module.scss'
import Card from '@/components/card/Card'
import projects from './projects.json'

const ProjectsPage = () => {
  console.log(projects)
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      {
        projects.length > 0 && projects.map((project) => <Card name={project.name} desc={project.desc} />)
      }


    </div>
  )
}

export default ProjectsPage
