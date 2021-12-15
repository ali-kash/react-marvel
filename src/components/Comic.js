import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from './Loader'
import { SwiperSlide, Swiper } from 'swiper/react'

const apiPublicKey = process.env.MARVEL_API_PUBLIC_KEY
const apiHash = process.env.MARVEL_API_HASH

const Comic = ({ charId, comicsLink }) => {
	// console.log(charId)

	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const comicPath = `https://gateway.marvel.com:443/v1/public/characters/${charId}/comics?format=comic&ts=1&apikey=${apiPublicKey}&hash=${apiHash}`

	useEffect(() => {
		const fetch = async () => {
			const result = await axios(comicPath)
			// console.log(result.data)
			setItems(result.data.data.results)
			setIsLoading(false)
		}

		fetch()
	}, [])

	return isLoading ? (
		<Loading />
	) : (
		<div className='sliderContainer'>
			<div className='sliderContainer__header'>
				<h2 className='sliderContainer__header-title'>Comics</h2>
				{/* <a
					href={comicsLink}
					target='_blank'
					className='sliderContainer__header-link'
				>
					View All
				</a> */}
			</div>

			<Swiper
				grabCursor={true}
				spaceBetween={16}
				slidesPerView={'auto'}
				loop={true}
			>
				{items.map((item) =>
					!item.thumbnail.path.includes('image_not_available') ? (
						<SwiperSlide key={item.id}>
							<div
								className='comic'
								style={{
									backgroundImage: `url(${item.thumbnail.path}.${item.thumbnail.extension})`,
								}}
							></div>
						</SwiperSlide>
					) : null
				)}
			</Swiper>
		</div>
	)
}

export default Comic
