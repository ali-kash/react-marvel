import SearchCharacter from '../components/Search'

import { Grid } from '@mui/material'
import marvelBanner from '../assets/marvel-banner-min.png'

const Home = () => {
	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignContent='center'
			alignItems='center'
		>
			<Grid item>
				<Grid item className='banner'>
					<img src={marvelBanner} alt='marvel banner' />
				</Grid>
				<Grid item>
					<div className='search-home'>
						<SearchCharacter />
					</div>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Home
