import { createContext, useEffect, useState } from "react";
import ErrorPage from "../pages/error";

export const AuthContext = createContext();

export function ContextProvider({ children }) {
    const [, setLoading] = useState(true)
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

    return (
        <>
            <AuthContext.Provider value={{ posts, setPosts }}>
                {children}
            </AuthContext.Provider>
        </>
    );
}