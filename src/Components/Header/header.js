import Input from './Input/input'
import ModalMenu from './modalMenu/modalmenu'
import Navbar from './Navbar/navbar'


//styles
import './header.scss'
//images
import logo from '../../assets/img/logo-black.png'


export default function Header() {
    return (
        <header className='header'>

            <a className="header__logo" href="/">
                <img className="header__logo--img" src={logo} alt="logo" width={58} />
                BoburBlog
            </a>
            <Navbar />
            <ModalMenu />
            <Input />
        </header>
    )
}