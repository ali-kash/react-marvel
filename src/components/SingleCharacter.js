import Comic from './Comic'

const SingleCharacter = () => {
	const info = JSON.parse(localStorage.getItem('singleData'))
	const name = info.name
	const charId = info.id
	const imageUrl = `${info.thumbnail.path}.${info.thumbnail.extension}`
	const description = info.description
	const comicsQuantity = info.comics.available
	const characterLinks = info.urls

	// const wikiLink = info.urls[1].url
	// const comicsLink = info.urls[2].url

	return (
		<div className='characterItem'>
			<div className='characterItem__wrapper'>
				<div
					className='characterItem__img'
					style={{ backgroundImage: `url(${imageUrl})` }}
				>
					{/* <img src={imageUrl} alt={name} className='singleanime__image' /> */}
				</div>
				<div className='characterItem__content'>
					<h2 className='characterItem__content-title'>{name}</h2>
					<p dangerouslySetInnerHTML={{ __html: description }} />
					<div className='characterItem__details'>
						{comicsQuantity != '0' ? (
							<h4>
								Number of comics available: <span>{comicsQuantity}</span>
							</h4>
						) : null}
						<div className='view-more'>
							{characterLinks.map((link, i) => {
								if (link.type === 'detail') {
									return (
										<a key={i} href={link.url} target='_blank'>
											learn more
										</a>
									)
								} else if (link.type === 'comiclink') {
									return (
										<a key={i + 1} href={link.url} target='_blank'>
											view all comics
										</a>
									)
								} else {
									return null
								}
							})}

							{/* {characterLinks.map((link, i) =>
								link.type === 'wiki' ? (
									<a key={i} href={link.url} target='_blank'>
										Learn More
									</a>
								) : null
							)} */}

							{/* <a href={wikiLink} target='_blank'>
								Learn More
							</a> */}
						</div>
					</div>
				</div>
			</div>
			{comicsQuantity != '0' ? <Comic charId={charId} /> : null}
		</div>
	)
}

export default SingleCharacter
