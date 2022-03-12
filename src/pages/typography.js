import { Link } from "react-router-dom";

export default function Typography() {
    return (
        <>
            <h1>Typography</h1>
            <h4>
                <Link className="home" to="/">Go to Home </Link>
            </h4>
        </>
    )
}