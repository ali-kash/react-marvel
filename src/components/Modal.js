import { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

function Modal({ closeModal }) {
	return (
		<div className='modal'>
			<div className='modal__container'>
				<div className='modal__closeBtn'>
					<button onClick={() => closeModal(false)}>
						<IoCloseCircleOutline />
					</button>
				</div>
				<div className='modal__body'>
					<div className='modal__body-title'>
						<h2>Disclaimer</h2>
					</div>
					<div className='modal__body-text'>
						<p>
							The characters, character content and images are property of{' '}
							<a href='https://www.marvel.com/' target='_blank'>
								Marvel / Disney
							</a>
							.
						</p>
						<p>
							This project was created for learning and testing puruposes only.
						</p>
					</div>
					<div className='modal__body-footer'>
						<button
							className='modalBtn closeModalBtn'
							onClick={() => closeModal(false)}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
