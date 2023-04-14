import Card from '../../components/card/card';
import CardTwo from '../../components/card/card2';
import CardThree from '../../components/card/card3';
import './header.css'
const Header = () => {
    return(
        <div className="card_container">
            <Card/>
            <CardThree/>
            <CardTwo/>
        </div>
    );
}
export default Header;