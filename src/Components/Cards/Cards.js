function Cards ({ cover, title }) { 
	return (
		<article className="card-logement">
			<img className="card-logement_image" src={cover} alt="location" />
			<div className="card-title">
			   <p className="card-logement_title">{title}</p>
		    </div>
		</article>
	);
}

export default Cards