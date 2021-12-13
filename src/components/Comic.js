import React from 'react'

const apiPublicKey = process.env.MARVEL_API_PUBLIC_KEY
const apiHash = process.env.MARVEL_API_HASH

const Comic = ({ charId }) => {
	console.log(charId)

	return (
		<div>
			<h1>comics here</h1>
		</div>
	)
}

export default Comic
