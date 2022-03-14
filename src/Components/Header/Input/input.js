import { useRef } from 'react'
import InputSearchHooks from '../../../Hooks/inputSearchHooks'

//images
import search from '../../../assets/img/search.png'

//style 
import './input.scss'

export default function Input() {
    const [, setInputSearch] = InputSearchHooks();
    const inputSearch = useRef();

    return (
        <form className="form-search">
            <input ref={inputSearch}
                onChange={(evt) => setInputSearch(evt.target.value)}
                className='search__input' type="search" placeholder="Search" />
            <img className='search__input--img' src={search} alt="search" width={16} />
        </form>
    )
}