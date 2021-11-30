import React from 'react'

import {
	NoSsr,
	Typography,
	Link,
	Paper,
	ImageListItem,
	Grid,
} from '@mui/material'

const CharacterCard = (props) => {
	const name = props.char.name
	const imageUrl = `${props.char.thumbnail.path}.${props.char.thumbnail.extension}`
	const description = props.char.description

	return (
		<>
			<ImageListItem className='image__gridItem'>
				<Paper>
					<img src={imageUrl} alt={name} />
					<Typography variant='h5' component='h2'>
						{name}
					</Typography>
				</Paper>
			</ImageListItem>

			{/* <ImageListItem className='image__list-item'>
				<Paper>
					<img
						src={`${imageUrl}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={name}
						loading='lazy'
					/>
					<Typography variant='h5' component='h2'>
						{name}
					</Typography>
				</Paper>
			</ImageListItem> */}
		</>
	)
}

export default CharacterCard
