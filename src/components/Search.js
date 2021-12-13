import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchContext } from '../context/search'

import SearchIcon from '@mui/icons-material/Search'

const SearchCharacter = () => {
	const history = useHistory()
	const search = useContext(SearchContext)
	const [input, setInput] = useState('')

	const handleSearch = (event) => {
		event.preventDefault()

		search.search(input).then((data) => {
			console.log(data)
			search.setData(data.data.results)
			localStorage.setItem('myData', JSON.stringify(data.data.results))
			history.push('./results')
		})
	}

	return (
		<>
			<div className='searchForm'>
				<form>
					<input
						type='text'
						name='input'
						className='searchForm__input'
						id='search-input'
						value={input}
						onChange={(event) => setInput(event.target.value)}
						placeholder='search...'
					/>
					<button
						type='submit'
						disabled={!input}
						onClick={handleSearch}
						className='searchForm__icon'
						id='search-btn'
					>
						<SearchIcon />
					</button>
				</form>
			</div>
		</>
	)
}

export default SearchCharacter
