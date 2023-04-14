import './card.css'
import card3 from '../../assets/card3.jpg';
const cardThree = () => {
    return(
        <div className="card">
            <div className="card_image">
                <img className="card-three" src={card3} alt="" />
            </div>
            <div className="card_text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error a architecto iste assumenda repudiandae iure modi voluptatem sed doloribus.</p>
            </div>
            <div className="card_button">
                <button type="button">Actions</button>
            </div>
        </div>
    );
}
export default cardThree;