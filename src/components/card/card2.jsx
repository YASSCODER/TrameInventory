import './card.css'
import card2 from '../../assets/card2.png';
const cardTwo = () => {
    return(
        <div className="card">
            <div className="card_image">
                <img src={card2} alt="" />
            </div>
            <div className="card_text">
                <p>Ajoutez un produit à votre Stock. Vous pouvez également générer un code QR pour votre produit</p>
            </div>
            <div className="card_button">
                <button type="button">Add Products</button>
            </div>
        </div>
    );
}
export default cardTwo;