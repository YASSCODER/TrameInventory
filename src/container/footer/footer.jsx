import './footer.css';
import logo from '../../assets/logoHR.svg'
const Footer = () => {
    return(
        <div className="footer_container">
            <div className="client">
                <p>TramePub</p>
            </div>
            <div className="divider">
            </div>
            <div className="catalog_link">
                <a href="#">www.Catalog.com</a>
            </div>
            <div className="divider"></div>
            <div className="studio">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Footer;