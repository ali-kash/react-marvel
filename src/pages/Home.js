import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchContext } from '../context/search'

import marvelBanner from '../assets/marvel-banner-min.png'

import { FormControl, Input, IconButton, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Home = () => {
	const history = useHistory()
	const search = useContext(SearchContext)
	const [input, setInput] = useState('')

	const handleSearch = (event) => {
		event.preventDefault()

		search.search(input).then((data) => {
			console.log(data.data.results)
			search.setData(data.data.results)
			localStorage.setItem('myData', JSON.stringify(data.data.results))
			history.push('./results')
		})
	}

	// useEffect(() => {
	// 	search.search('thor').then((data) => {
	// 		console.log(data.data.results)
	// 	})
	// }, [search])

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
					<form className='searchForm'>
						<FormControl type='submit' className='searchForm__control'>
							<Input
								type='text'
								placeholder='Search for your favorite character ...'
								value={input}
								onChange={(event) => setInput(event.target.value)}
								className='searchForm__input'
							/>
							<IconButton
								variant='contained'
								color='primary'
								type='submit'
								disabled={!input}
								onClick={handleSearch}
								className='searchForm__icon'
							>
								<SearchIcon />
							</IconButton>
						</FormControl>
					</form>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Home
