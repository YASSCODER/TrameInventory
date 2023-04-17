import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookBookmark} from '@fortawesome/free-solid-svg-icons'
import weDev from '../../assets/logoHR.svg'
import trame from '../../assets/LOGOTRAME.svg'
const Footer = () => {
    return(
        <div className="footer_container">
            <div className="studio">
                <a href="#"><img src={weDev} alt="" /></a>
            </div>
            <div className="divider"></div>
            <div className="catalog_link">
                <a href="https://trame.hideagifts.com/fr/catalogue/"><FontAwesomeIcon icon ={faBookBookmark} className='icon'/></a>
            </div>
        </div>
    )
}

export default Footer;