import logoKasa from '../../Assets/LOGO.png'
import Nav from '../Nav/Nav'

function Header(){
    return(
        <header className="header">
            <img src={logoKasa} alt="logo kasa" className="kasa-logo" />
            <Nav />
        </header>
    );
}
export default Header