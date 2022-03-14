import { useContext } from "react";
import { SearchContext } from "../context/inputSearchContext";

export default function InputSearchHooks() {
    const { inputSearch, setInputSearch } = useContext(SearchContext);

    return [inputSearch, setInputSearch];
}
