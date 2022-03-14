import { Link } from "react-router-dom"
import ErrorPage from "../../pages/error"
import Links from "./links/links"

//styles
import './post.scss'

const Posts = (({ posts, loading, error }) => {

    if (loading) {
        return <strong>LOADING...</strong>
    } else if (error) {
        return <ErrorPage />
    }
    return (
        <div className="user">
            <Links />
            {posts.length > 0 && <ul className="user__list">
                {posts.map((post) => (
                    <li className="user__item" key={post.id}>
                        <Link className="user__link" to={'/info'} state={{ id: post.id }}>{post.title}</Link>
                    </li>
                ))}
            </ul>}
        </div>
    )
})

export default Posts;