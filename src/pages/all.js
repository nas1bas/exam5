import { useEffect, useState } from "react"
import Posts from "../Components/Posts/post"

//style
import './all.scss'
import ErrorPage from "./error"

export default function All() {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [start] = useState(0)

    const postPerpage = 100
    // const [hasPrev, setHasPrev] = useState(false)
    // const [hasNext, setHasNext] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${postPerpage}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setPosts(data)
                // if (data.length == postPerpage)
                //     setHasNext(true)
                // else setHasNext(false)
            })
            .catch((err) => {
                <ErrorPage />
                setLoading(false)
            })
    }, [])

    // function prevClicked() {
    //     setStart(start - postPerpage)

    //     if (start != 0)
    //         setHasPrev(true)
    //     else setHasPrev(false)
    // }

    // function nextClicked() {
    //     setStart(start + postPerpage)
    //     setHasPrev(true)
    // }

    return (
        <div className="all">
            <h1 className="all__title">Recent Posts</h1>
            <Posts posts={posts} loading={loading} />
            {/* <div className="all__btns">
                <button enabled="{hasPrev}" onClick={prevClicked}>Prev</button>
                <button enabled="{hasNext}" onClick={nextClicked}>Next</button>
            </div> */}
        </div >
    )
}