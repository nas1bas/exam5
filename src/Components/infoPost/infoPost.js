import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ErrorPage from "../../pages/error";

//style 
import './infoPage.scss'

//images
import likes from '../../assets/img/like.png'
import share from '../../assets/img/share.png'

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
        <div className="info">
            <div className="info__btns">
                <div>
                    <img src={likes} alt="likes" />
                    <p className="info__like">125</p>
                </div>
                <div>
                    <img src={share} alt="share" />
                    <p>70</p>
                </div>
            </div>
            <div className="info__content">
                <h1>
                    Information
                </h1>
                <p className="info__text">{post.body}</p>
                <Link className="home" to="/">Go to Home </Link>
            </div>

        </div>
    )
}