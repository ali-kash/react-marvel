import CharacterCard from './CharacterCard'
import { ImageList } from '@mui/material'

const CharacterList = (props) => {
	return (
		<ImageList gap={20} cols={{ xs: 1, sm: 2, md: 4 }} className='image__grid'>
			{props.data.map((char) => (
				<CharacterCard key={char.id} char={char} />
			))}
		</ImageList>
	)
}

export default CharacterList
