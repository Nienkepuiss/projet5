function Cards ({ cover, title }) { 
	return (
		<article className="card-logement">
			<img className="card-logement_image" src={cover} alt="location" />
			<p className="card-logement_title">{title}</p>
		</article>
	);
}

export default Cards