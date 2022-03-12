import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//style 
import './infoPage.scss'

export default function InfoPost() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPosts(data)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <strong>LOADING...</strong>
    } else if (error) {
        return <strong>ERROR...</strong>
    }

    return (
        <div>
            <h1>
                Information
            </h1>
            {posts.length > 0 && <ul className="user-list">
                {posts.map((post) => (
                    <li className="user-link" key={post.userId}>
                        {post.body}
                    </li>
                ))}
            </ul>}
            <h4>
                <Link className="home" to="/">Go to Home </Link>
            </h4>
        </div>
    )
}