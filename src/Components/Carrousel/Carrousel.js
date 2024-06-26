import {useState} from "react";
import vectorPrev from "../../Assets/VectorPrev.png";
import vectorNext from "../../Assets/VectorNext.png";

function Carrousel ({slides}) {
    const [current, setCurrent] = useState(0); 
	const length = slides.length; 

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); 
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); 
	};

    if (!Array.isArray(slides) || length <= 0) {
		return null
	}

	return (
		<div className="gallery">
			{length > 1 && (
				<img
					src={vectorPrev}
					className="arrow left-arrow"
					onClick={prevSlide}
					alt="Previous Arrow"
				/>
			)}
			{length > 1 && (
				<img
					src={vectorNext}
					className="arrow right-arrow"
					onClick={nextSlide}
					alt="Next Arrow"
				/>
			)}
			{slides.map((slider, index) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={`slider-${index}`}
					>
						{index === current && (
							<img
								src={slider}
								alt={'slide ' + (parseInt(index) + 1)}
								className="image"
							/>
						)}
                       {slides.length > 1 && index === current && (
                            <span className="gallery_number">
                             {current + 1}/{slides.length}
                            </span>
                        )}
			    	</div>
				)
			})}
		</div>
	)
}

export default Carrousel
