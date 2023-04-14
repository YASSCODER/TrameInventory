import './card.css'
import card1 from '../../assets/card1.png';
const card = () => {
    return(
        <div className="card">
            <div className="card_image">
                <img src={card1} alt="" />
            </div>
            <div className="card_text">
                <p>Listez tous les produits de votre Stock en sélectionnant la catégorie de votre choix</p>
            </div>
            <div className="card_button">
                <button type="button">List Products</button>
            </div>
        </div>
    );
}
export default card;