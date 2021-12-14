import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchContext } from '../context/search'

import { Typography, Link, Paper, ImageListItem } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	paper: {
		borderRadius: '1rem',
		boxShadow: 'none',
		position: 'relative',
		width: '100%',
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
			background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
		},
		'&:hover': {
			transition: '0.8s',
			cursor: 'pointer',
			padding: 0,
			'&:after': {
				background: 'rgba(0,0,0,0.7)',
				bottom: 0,
			},
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
		textAlign: 'left',
		padding: '0 20px 8px',
	},
}))

const apiPublicKey = process.env.MARVEL_API_PUBLIC_KEY
const apiHash = process.env.MARVEL_API_HASH

const CharacterCard = (props) => {
	const styles = useStyles()

	const search = useContext(SearchContext)
	const history = useHistory()
	const onClickHandler = () => {
		fetch(
			`https://gateway.marvel.com:443/v1/public/characters/${props.char.id}?ts=1&apikey=${apiPublicKey}&hash=${apiHash}`
		)
			.then((response) => response.json())
			.then((data) => {
				search.setSingle(data)
				localStorage.setItem('singleData', JSON.stringify(data.data.results[0]))
				history.push('/single-view')
			})

		console.log(`${props.char.id}`)
	}

	const name = props.char.name
	const imageUrl = `${props.char.thumbnail.path}.${props.char.thumbnail.extension}`

	return (
		<>
			<ImageListItem>
				<Link
					component='button'
					variant='body1'
					style={{ marginBottom: 0, zIndex: 1 }}
					onClick={onClickHandler}
				>
					<Paper
						className={`${styles.paper} image__gridItem`}
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
					</Paper>
				</Link>
			</ImageListItem>
		</>
	)
}

export default CharacterCard
