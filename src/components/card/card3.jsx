import './card.css'
import card3 from '../../assets/card3.jpg';
const cardThree = () => {
    return(
        <div className="card">
            <div className="card_image">
                <img src={card3} alt="" />
            </div>
            <div className="actions-text">
                <p>Rester à jour sur l'état de votre Stock</p>
            </div>
            <div className="card_button">
                <button type="button">Actions</button>
            </div>
        </div>
    );
}
export default cardThree;