import { useEffect } from 'react'

import { Grid, Paper, Typography, Link } from '@mui/material'

const SingleCharacter = (props) => {
	console.log(props.info[0])

	const info = props.info[0]

	const name = info.name
	const imageUrl = `${info.thumbnail.path}.${info.thumbnail.extension}`
	const series = info.series.items
	// const airing = String(info.airing)
	// const broadcast = info.broadcast
	// const score = info.score
	// const resourceURI = info.resourceURI

	// const { name, thumbnail } = info

	// console.log(name)

	// useEffect(() => {
	// 	console.log(name, thumbnail)
	// }, [props.info])

	return (
		<Grid
			container
			spacing={10}
			direction='row'
			justify='center'
			alignContent='center'
			alignItems='center'
			className='singleanime__container'
		>
			<Grid item>
				<img src={imageUrl} alt={name} className='singleanime__image' />
			</Grid>
			<Grid item>
				<Paper elevation={3} className='singleanime__description'>
					<Typography variant='h4' component='h2'>
						{name}
					</Typography>

					{series.map((serie, i) => (
						<Typography key={i} variant='h5' component='h2'>
							<Link component='button' variant='body1' href={serie.resourceUI}>
								{serie.name}
							</Link>
						</Typography>
					))}
				</Paper>
			</Grid>
		</Grid>
	)
}

export default SingleCharacter
