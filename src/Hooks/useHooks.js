import { useContext } from "react";
import { AuthContext } from "../context/authcontext";

export default function UseHooks() {
    const { post, setPost } = useContext(AuthContext);

    return [post, setPost];
}

