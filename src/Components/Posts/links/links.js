//images
import facebook from '../../../assets/img/facebook.png'
import twitter from '../../../assets/img/twitter.png'
import github from '../../../assets/img/github.png'
import linkIn from '../../../assets/img/in.png'


export default function Links() {
    return (
        <div className="user__content">
            <h1 className="user__title">What I do!</h1>
            <p className="user__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer aliquet, orci in bibendum luctus, turpis ante pretium velit,
                eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
            </p>
            <a className="user__linkin" href="">EXPLORE ME</a>
            <div className="links">
                <a className="links__link" href="/">
                    <img src={facebook} alt="facebook" />
                </a>
                <a className="links__link" href="/">
                    <img src={twitter} alt="twitter" />
                </a>
                <a className="links__link" href="/">
                    <img src={github} alt="github" />
                </a>
                <a className="links__link" href="/">
                    <img src={linkIn} alt="in" />
                </a>
            </div>
        </div>
    )
}