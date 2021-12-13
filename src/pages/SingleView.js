import { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../context/search'

import SingleCharacter from '../components/SingleCharacter'

import Typography from '@mui/material/Typography'

const SingleView = () => {
	const search = useContext(SearchContext)
	const [dataExists, setDataExists] = useState(true)

	useEffect(() => {
		if (
			search.singleData === undefined ||
			Object.keys(search.singleData).length === 0
		) {
			try {
				search.setSingle(JSON.parse(localStorage.getItem('singleData')))
				setDataExists(true)
			} catch (error) {
				console.log(error)
				setDataExists(false)
			}
		}

		// console.log(search.singleData.data.results)
	}, [])

	return (
		<div>
			{(dataExists && <SingleCharacter info={search.singleData} />) || (
				<Typography>No data exists for this Anime</Typography>
			)}
		</div>
	)
}

export default SingleView
