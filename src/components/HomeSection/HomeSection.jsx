import React from 'react';
import styles from './HomeSection.module.css';

const HomeSection = ({ type }) => {

	return (
		<section id="home" className={`${styles.section} ${styles[`section--${type}`]}`}>
			<div className={styles.wrapper}>
				<div className={`${styles.content} ${styles[`content--${type}`]} ${styles['fade-in']}`}>
					<p className={styles.aboutme}>
						<span>Born in 2002</span>
						<span>Passionate about</span>
						<span>diverse and</span>
						<span>inspiring web design.</span>
						<span>Constantly exploring</span>
						<span>and experimenting</span>
						<span>with innovative expressions.</span>
						<span>Driven to create</span>
						<span>impactful and memorable</span>
						<span>experiences.</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default HomeSection
