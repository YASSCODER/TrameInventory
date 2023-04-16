import './card.css'
const card = (props) => {
    return(
        <div className="card">
            <div className="card_image">
                <img src={props.imageSource} alt="card image" />
            </div>
            <div className="card_text">
                <p>{props.text}</p>
            </div>
            <div className="card_button">
                <button type="button">{props.buttonText}</button>
            </div>
        </div>
    );
}
export default card;