import { Link } from "react-router-dom";

export default function UX() {
    return (
        <>
            <h1>UX</h1>
            <h4>
                <Link className="home" to="/">Go to Home </Link>
            </h4>
        </>
    )
}