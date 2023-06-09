import React, { useEffect } from 'react'
import './PreLoader.css'
import { preLoaderAnim } from '../../animations'

const PreLoader = () => {

	useEffect(() => {
		preLoaderAnim()
	}, [])

	return (
		<div className='preloader'>
			<div className='texts-container'>
				<span className='nombre'>Javier Chavez</span>
				{/* <span>Chavez</span> */}
				<span> Portfolio</span>
			</div>
		</div>
	)
}

export default PreLoader
