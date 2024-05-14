import { Link } from 'react-router-dom'

function Erreur () {
    return (
    <div className="erreur">
       <p className="erreur_title">404</p>
       <p className="erreur_text">Oups! La page que vous demandez n'existe pas.</p>
       <Link className="erreur_link" to="/">Retourner sur la page d'accueil</Link>
    </div>
    );
}
export default Erreur