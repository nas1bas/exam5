import { useEffect, useState } from "react"
import Posts from "../Components/Posts/post"

//style
import './all.scss'

export default function All() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [limitPosts, setLimitPosts] = useState(8)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPosts(data)
            })
            .catch((err) => {
                setError(error)
                setLoading(false)
            })
    }, [])


    const indexOfLastPost = currentPage * limitPosts;
    const indexOfFirstPost = indexOfLastPost - limitPosts;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    const handlePrevBtn = (() => {

        if (currentPage <= 1) {
            return
        } else {
            return setCurrentPage(currentPage - 1)
        }
    })

    const handleNextBtn = (() => {
        if (currentPage) {
            setCurrentPage(currentPage + 1)
        }
    })

    return (
        <div className="all">
            <h1 className="all__title">Recent Posts</h1>
            <Posts posts={currentPosts} loading={loading} />
            <div className="all__btns">
                <button onClick={() => handlePrevBtn}>Prev</button>
                <button onClick={() => handleNextBtn}>Next</button>
            </div>
        </div>
    )
}