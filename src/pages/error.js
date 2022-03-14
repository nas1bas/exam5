import { Link } from 'react-router-dom'
import error from '../assets/img/error.png'

export default function ErrorPage() {
    return (
        <>
            <img src={error} alt="error" />
            <h1>Page not found - 404</h1>
            <p>
                This page not found (deleted or never exists).
                Try a phrase in search box or back to home and start again.
            </p>
            <Link className="home" to="/">Go to Home </Link>
        </>
    )
}