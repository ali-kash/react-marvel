import React from 'react'

import { Typography, Link, Paper, ImageListItem, Card } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	card: {
		borderRadius: '1rem',
		boxShadow: 'none',
		position: 'relative',
		minWidth: 200,
		minHeight: 360,
		backgroundSize: 'cover',
		overflow: 'hidden',
		'&:after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			width: '100%',
			height: '100%',
			bottom: '-20%',
			zIndex: 1,
			background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
		},
	},
	content: {
		position: 'absolute',
		zIndex: 2,
		bottom: 0,
		width: '100%',
		color: '#ffffff',
		fontFamily: 'Montserrat',
		fontSize: '1.25rem',
	},
}))

const CharacterCard = (props) => {
	const styles = useStyles()

	const name = props.char.name
	const imageUrl = `${props.char.thumbnail.path}.${props.char.thumbnail.extension}`
	const description = props.char.description

	return (
		<>
			<ImageListItem className='image__gridItem'>
				<Card
					className={styles.card}
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				>
					<Typography
						gutterBottom
						variant='h6'
						component='h2'
						className={styles.content}
						py={1}
						px={2}
						my={0}
					>
						{name}
					</Typography>
				</Card>
			</ImageListItem>

			{/* <ImageListItem className='image__gridItem'>
				<Paper>
					<img src={imageUrl} alt={name} />
					<Typography variant='h5' component='h2'>
						{name}
					</Typography>
				</Paper>
			</ImageListItem> */}
		</>
	)
}

export default CharacterCard
