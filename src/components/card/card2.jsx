import './card.css'
import card2 from '../../assets/card2.png';
const cardTwo = () => {
    return(
        <div className="card">
            <div className="card_image">
                <img src={card2} alt="" />
            </div>
            <div className="card_text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error a architecto iste assumenda repudiandae iure modi voluptatem sed doloribus.</p>
            </div>
            <div className="card_button">
                <button type="button">Add Products</button>
            </div>
        </div>
    );
}
export default cardTwo;