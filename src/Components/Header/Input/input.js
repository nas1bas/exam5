//images
import search from '../../../assets/img/search.png'

//style 
import './input.scss'

export default function Input() {
    return (
        <div className="search">
            <input className='search__input' type="search" placeholder="Search" />
            <img className='search__input--img' src={search} alt="search" width={16} />
        </div>
    )
}