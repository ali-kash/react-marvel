import React from 'react'
import loaderImg from '../assets/loading.gif'

const Loading = () => {
	return (
		<div className='loader'>
			<img src={loaderImg} alt='loading gif' />
		</div>
	)
}

export default Loading
