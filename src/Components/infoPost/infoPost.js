import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ErrorPage from "../../pages/error";

//style 
import './infoPage.scss'

export default function InfoPage() {

    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState([])

    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPost(data)
            })
            .catch((error) => {
                if (loading) {
                    return <strong>LOADING...</strong>
                } else if (error) {
                    return <ErrorPage />
                }
            })
    }, [])



    return (
        <div>
            <h1>
                Information
            </h1>
            <p>{post.body}</p>
            <Link className="home" to="/">Go to Home </Link>

        </div>
    )
}