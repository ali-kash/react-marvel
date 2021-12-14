import { useEffect, useState, useContext } from 'react'
import { SearchContext } from '../context/search'

import Loading from '../components/Loader'
import CharacterList from '../components/CharacterList'

import { Box, Typography } from '@mui/material'

const Results = () => {
	const search = useContext(SearchContext)
	const [dataExists, setDataExists] = useState(true)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (search.charData === undefined || search.charData.length === 0) {
			try {
				search.setData(JSON.parse(localStorage.getItem('myData')))
				setDataExists(true)
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setDataExists(false)
			}
		}

		// console.log(search.charData)
	}, [search])

	return (
		<Box mt={2}>
			{(dataExists && (
				<CharacterList data={search.charData} isLoading={isLoading} />
			)) || <Typography variant='h4'>data does not exist</Typography>}
		</Box>
	)
}

export default Results
