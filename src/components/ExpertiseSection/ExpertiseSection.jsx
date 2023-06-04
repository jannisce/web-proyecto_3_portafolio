import React from 'react'
import styles from './ExpertiseSection.module.css'

function ExpertiseSection({ type }) {
  const generarLista = (title, items) => (
    <ul className={styles.contenedor}>
      <li>
        <h2 className={styles.title}>
          ■
          {title}
        </h2>
        <ul className={styles.skills}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </li>
    </ul>
  )

  const programmingLanguages = ['Python', 'Java', 'JavaScript']
  const webTechnologies = ['HTML5', 'CSS3', 'React', 'Node.js']
  const developmentTools = ['Visual Studio Code', 'Git']
  const databases = ['PostgreSQL']
  const languages = ['Native Spanish Speaker', 'B2 Level English Proficiency']

  return (
    <section id="expertise" className={`${styles.section} ${styles[`section--${type}`]}`}>
      <div className={styles.wrapper}>
        <div className={`${styles.content} ${styles[`content--${type}`]} ${styles['fade-in']}`}>
          <div className={styles.expertise}>
            {generarLista('Programming Languages', programmingLanguages)}
            {generarLista('Web Technologies', webTechnologies)}
            {generarLista('Development Tools', developmentTools)}
            {generarLista('Databases', databases)}
            {generarLista('Languages', languages)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection
