import { createContext } from 'react'

export const SearchContext = createContext({
	charData: [],
	singleData: {},
	search: () => {},
	setData: () => {},
	setSingle: () => {},
})
