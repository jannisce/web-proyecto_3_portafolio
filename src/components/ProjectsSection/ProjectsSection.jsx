import React from 'react'
import styles from './ProjectsSection.module.css'

function ProjectsSection({ type }) {
  const generarLista = (title, items) => (
    <ul className={styles.contenedor}>
      <li>
        <h2 className={styles.title}>
          ■
          {title}
        </h2>
        <ul className={styles.skills}>
          {items.map((item, index) => (
            <a key={index} href={item[1]} target="_blank" className={styles.link} rel="noreferrer">
              {' '}
              <span className={styles.details}>{item[2]}</span>
              {' '}
              {item[0]}
            </a>
          ))}
        </ul>
      </li>
    </ul>
  )
  const webDevelopment = [
    ['Pacman Maze', 'https://ephemeral-tarsier-ee8154.netlify.app', '2023 / Special'],
    ['Riot Games Clone', 'https://silly-kitsune-5fbf17.netlify.app', '2023 / Personal'],
    ['Memory Card Game', 'https://resonant-rabanadas-caca6a.netlify.app', '2023 / Personal'],
    ['Calculator', 'https://uvgenios.online/21016/dist-lab9/', '2023 / Personal'],
  ]
  const design = [
    ['WhatsApp: WhatsApp Pay.', 'https://www.figma.com/proto/FA9DWRlF0xTffu4TqVc67Z/WhatsApp-UI-Screens-(Community)?page-id=0%3A8102&type=design&node-id=0-8855&viewport=632%2C668%2C0.25&scaling=min-zoom&starting-point-node-id=0%3A8855', '2023 / Personal'],
    ['Steam Redesign for Moms', 'https://www.figma.com/proto/BmcopXXiebnBQqGEzpQoEO/Steam-(Community)?page-id=0%3A1&type=design&node-id=306-260&viewport=-361%2C-2801%2C2.11&scaling=min-zoom', '2023 / Special'],
    ['VotaFacil: Digital Voting', 'https://www.figma.com/file/7Z3l4utgPxBHUM9sX0K9Vj/VotoF%C3%A1cil?type=design&node-id=1%3A3&t=Cwiw6KhXzNu2ftOj-1', '2023 / Personal'],
  ]
  const video = [
    ['Humans Being Humans', 'https://vm.tiktok.com/ZM26P9pMU/', '2023 / Personal'],
    ['Peace', 'https://vm.tiktok.com/ZM26PcJwV/', '2023 / Personal'],
  ]

  return (
    <section id="projects" className={`${styles.section} ${styles[`section--${type}`]}`}>
      <div className={styles.wrapper}>
        <div className={`${styles.content} ${styles[`content--${type}`]} ${styles['fade-in']}`}>
          <div className={styles.expertise}>
            {generarLista('Web Development', webDevelopment)}
            {generarLista('Design UX / UI', design)}
            {generarLista('Video Editing', video)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
