import { Link } from "react-router-dom"
import Links from "./links/links"

//styles
import './post.scss'

const Posts = (({ posts, loading, error }) => {

    if (loading) {
        return <strong>LOADING...</strong>
    } else if (error) {
        return <strong>ERROR...</strong>
    }
    return (
        <div className="user">
            <Links />
            {posts.length > 0 && <ul className="user__list">
                {posts.map((post) => (
                    <li className="user__item" key={post.userId}>
                        <Link className="user__link" to={'/info'}>{post.title}</Link>
                    </li>
                ))}
            </ul>}
        </div>
    )
})

export default Posts;