import { Grid, Paper, Typography } from '@mui/material'

const SingleCharacter = (props) => {
	const info = JSON.parse(localStorage.getItem('singleData'))

	const name = info.name
	const imageUrl = `${info.thumbnail.path}.${info.thumbnail.extension}`

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
				</Paper>
			</Grid>
		</Grid>
	)
}

export default SingleCharacter
