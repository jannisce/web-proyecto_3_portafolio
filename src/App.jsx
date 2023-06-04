import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import styles from './App.module.css'
import PreLoader from './components/PreLoader/PreLoader'
import HomeSection from './components/HomeSection/HomeSection'
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ContactSection from './components/ContactSection/ContactSection'

function App() {
  const [selectedSection, setSelectedSection] = useState({
    home: 'true',
    expertise: 'false',
    projects: 'false',
    contact: 'false',
  })

  return (
    <>
      <PreLoader />
      <NavBar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <main className={styles.container}>
        <HomeSection type={selectedSection.home === 'true' ? 'enabled' : 'disabled'} />
        <ExpertiseSection type={selectedSection.expertise === 'true' ? 'enabled' : 'disabled'} />
        <ProjectsSection type={selectedSection.projects === 'true' ? 'enabled' : 'disabled'} />
        <ContactSection type={selectedSection.contact === 'true' ? 'enabled' : 'disabled'} />
      </main>
    </>
  )
}

export default App
