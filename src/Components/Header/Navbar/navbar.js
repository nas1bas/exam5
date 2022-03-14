import { NavLink } from 'react-router-dom'

//styles
import './navbar.scss'

export default function Navbar() {

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className="navbar__link">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar__link navbar__link-active' : 'navbar__link')} to={"/"}>All</NavLink >
                </li>
                <li className="navbar__link">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar__link navbar__link-active' : 'navbar__link')} to={"/design"}>Design Theory</NavLink >
                </li>
                <li className="navbar__link">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar__link navbar__link-active' : 'navbar__link')} to={"/ux"}>UX</NavLink >
                </li>
                <li className="navbar__link">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar__link navbar__link-active' : 'navbar__link')} to={'/ui'}>UI</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar__link navbar__link-active' : 'navbar__link')} to={'/typography'}>Typography</NavLink>
                </li>
            </ul>
        </nav>
    )
}