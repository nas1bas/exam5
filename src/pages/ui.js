import { Link } from "react-router-dom";

export default function UI() {
    return (
        <>
            <h1>UI</h1>
            <h4>
                <Link className="home" to="/">Go to Home </Link>
            </h4>
        </>
    )
}