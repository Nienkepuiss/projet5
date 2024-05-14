import { Link } from 'react-router-dom'

function Nav(){
    return(
            <nav className="nav">
                <Link to="/" className="Accueil">Accueil</Link>
                <Link to="/a-propos" className="Apropos">À propos</Link>
            </nav>
    );
}
export default Nav