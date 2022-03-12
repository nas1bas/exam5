//images
import logo from '../../assets/img/logo-white.png'
import FooterMenu from './Menu/menu'


//style
import './footer.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <a className="footer__logo" href="/">
                <img className="footer__logo--img" src={logo} alt="logo" width={58} />
                Bobur
            </a>
            <FooterMenu />
        </footer>
    )
}