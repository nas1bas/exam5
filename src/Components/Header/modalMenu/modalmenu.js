import { useState } from 'react'
import { NavLink } from 'react-router-dom'

//images
import toggleBtn from '../../../assets/img/Menu.png'


export default function ModalMenu() {
    const [open, setOpen] = useState(false)

    function clickHandle() {
        setOpen(!open)
    }
    return (
        <>
            <button className="header-btn" onClick={clickHandle}>
                <img src={toggleBtn} alt="menu" />
            </button>
            <dialog className='modal' open={open}>
                <ul className='modal__list'>
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
            </dialog>
        </>
    )
}