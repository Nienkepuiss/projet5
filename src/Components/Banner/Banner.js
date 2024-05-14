import HomeBanner from "../../Assets/HomeBanner.png"

function Banner() {
	return (
		    <div className="banner">
		         <img src={HomeBanner} alt="photo d'accueil" className="banner-img" />
		         <div className="banner-text">Chez vous, partout et ailleurs</div>
            </div>
	);
}
export default Banner