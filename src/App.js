import { useState } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'

import Home from './pages/Home'
import Results from './pages/Results'
import SingleView from './pages/SingleView'

import Navigation from './components/Navigation'

import { SearchContext } from './context/search'

import './styles/global.scss'

function App() {
	const [charData, setCharData] = useState([])
	const [singleData, setSingleData] = useState({})

	const apiPublicKey = process.env.MARVEL_API_PUBLIC_KEY
	const apiHash = process.env.MARVEL_API_HASH

	const setData = (data) => {
		setCharData(data)
	}

	const setSingle = (data) => {
		setSingleData(data)
	}

	const search = (searchTerm) => {
		return fetch(
			`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&ts=1&apikey=${apiPublicKey}&hash=${apiHash}`
		).then((response) => response.json())
	}

	return (
		<SearchContext.Provider
			value={{ search, charData, setData, singleData, setSingle }}
		>
			<Router>
				<div className='app'>
					<Navigation />
					<main>
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/results' exact component={Results} />
							<Route path='/single-view' exact component={SingleView} />
							<Redirect to='/' />
						</Switch>
					</main>
				</div>
			</Router>
		</SearchContext.Provider>
	)
}

export default App
