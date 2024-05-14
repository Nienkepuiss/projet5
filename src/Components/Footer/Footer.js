import logoWhite from "../../Assets/LOGOwhite.png"

function Footer(){
    return(
        <footer className="footer">
            <img src={logoWhite} alt="logo kasa en blanc" />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
export default Footer