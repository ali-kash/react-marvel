import CharacterCard from './CharacterCard'
import { ImageList } from '@mui/material'

const CharacterList = (props) => {
	return (
		<ImageList className='image__grid'>
			{props.data.map((char) => (
				<CharacterCard key={char.id} char={char} />
			))}
		</ImageList>
	)
}

export default CharacterList
