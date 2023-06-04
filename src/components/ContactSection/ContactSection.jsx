import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = ({ type }) => {
  const generarLista = (title, items) => {
    return (
      <ul className={styles.contenedor}>
        <li>
          <h2 className={styles.title}>■ {title}</h2>
          <ul className={styles.skills}>
            {items.map((item, index) => (
              <a key={index} href={item[1]} target="_blank" className={styles.link}> <span className={styles.details}>{item[2]}</span>  {item[0]}</a>
            ))}
          </ul>
        </li>
      </ul>
    )
  }

  const contact = [
    ['Email', "mailto:javierjlace@gmail.com", ''],
    ['WhatsApp', 'wa.me/50259224977', ''],
    ['Facebook', 'https://www.facebook.com/marketplace/profile/100011572120408/?ref=share_attachment', ''],
  ];
  const social = [
    ['GitHub', 'https://github.com/jannisce', ''],
    ['Instagram', 'https://www.instagram.com/jannisce/', ''],
  ];

  return (
    <section id="projects" className={`${styles.section} ${styles[`section--${type}`]}`}>
      <div className={styles.wrapper}>
        <div className={`${styles.content} ${styles[`content--${type}`]} ${styles['fade-in']}`}>
          <div className={styles.expertise}>
            {generarLista('You can reach me at', contact)}
            {generarLista('Social media', social)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
