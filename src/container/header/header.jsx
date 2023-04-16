import Card from '../../components/card/card';
import cardComponent from './cardItem';
import './header.css'
const Header = () => {
    return(
        <div className="card_container">
            {
                cardComponent.map((item)=>
                <Card imageSource = {item.link}
                text = {item.text}
                buttonText = {item.buttonText}/>
                )
            }
        </div>
    );
}
export default Header;