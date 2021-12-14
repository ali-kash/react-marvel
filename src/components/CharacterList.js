import CharacterCard from './CharacterCard'
import { ImageList, Grid } from '@mui/material'

const CharacterList = (props) => {
	return (
		<ImageList gap={20} cols={4}>
			{props.data.map((char) => (
				<CharacterCard key={char.id} char={char} />
			))}
		</ImageList>
	)
}

export default CharacterList
