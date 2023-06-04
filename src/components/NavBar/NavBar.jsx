import React from 'react'
import styles from './NavBar.module.css'

function NavBar({ selectedSection, setSelectedSection }) {
  return (
    <div className={styles.contenedor}>
      <div className={styles.info}>
        <h2 className={styles.nombre}>Javier Chavez</h2>
        <h3 className={styles.label}>Frontend Developer</h3>
      </div>
      <nav className={styles.navbar}>
        <ol className={styles.navbarList}>
          <li className={styles.lista}>
            <div className={`${styles[`dot--${selectedSection.home === 'true' ? 'active' : 'inactive'}`]}`}>
              ●
            </div>
            <a
              href="#home"
              className={`${styles.navbarLink} ${styles[`navbarLink--${selectedSection.home === 'true' ? 'active' : 'inactive'}`]}`}
              onClick={() => setSelectedSection({
                home: 'true', expertise: 'false', projects: 'false', contact: 'false',
              })}
            >
              {/* <span className={styles.hashtag}>#</span> home */}
              Home
            </a>
          </li>
          <li className={styles.lista}>
            <div className={`${styles[`dot--${selectedSection.expertise === 'true' ? 'active' : 'inactive'}`]}`}>
              ●
            </div>
            <a
              href="#expertise"
              className={`${styles.navbarLink} ${styles[`navbarLink--${selectedSection.expertise === 'true' ? 'active' : 'inactive'}`]}`}
              onClick={() => setSelectedSection({
                home: 'false', expertise: 'true', projects: 'false', contact: 'false',
              })}
            >
              {/* <span className={styles.hashtag}>#</span> expertise ■ */}
              Expertise
            </a>
          </li>
          <li className={styles.lista}>
            <div className={`${styles[`dot--${selectedSection.projects === 'true' ? 'active' : 'inactive'}`]}`}>
              ●
            </div>
            <a
              href="#projects"
              className={`${styles.navbarLink} ${styles[`navbarLink--${selectedSection.projects === 'true' ? 'active' : 'inactive'}`]}`}
              onClick={() => setSelectedSection({
                home: 'false', expertise: 'false', projects: 'true', contact: 'false',
              })}
            >
              {/* <span className={styles.hashtag}>#</span> projects */}
              Projects
            </a>
          </li>
          <li className={styles.lista}>
            <div className={`${styles[`dot--${selectedSection.contact === 'true' ? 'active' : 'inactive'}`]}`}>
              ●
            </div>
            <a
              href="#contact"
              className={`${styles.navbarLink} ${styles[`navbarLink--${selectedSection.contact === 'true' ? 'active' : 'inactive'}`]}`}
              onClick={() => setSelectedSection({
                home: 'false', expertise: 'false', projects: 'false', contact: 'true',
              })}
            >
              {/* <span className={styles.hashtag}>#</span> Contact */}
              Contact
            </a>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default NavBar
