import './card.css'
import card1 from '../../assets/card1.png';
const card = () => {
    return(
        <div className="card">
            <div className="card_image">
                <img src={card1} alt="" />
            </div>
            <div className="card_text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error a architecto iste assumenda repudiandae iure modi voluptatem sed doloribus.</p>
            </div>
            <div className="card_button">
                <button type="button">List Products</button>
            </div>
        </div>
    );
}
export default card;