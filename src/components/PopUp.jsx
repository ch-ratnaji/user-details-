import "./PopUp.css";

export default function PopUp({ onClose, popUpHeading, component }) {
  return (
    <div className="popUp-container">
      <div className="popUP">
        <h2>{popUpHeading}</h2>
        {component}
        <button onClick={onClose}></button>
      </div>
    </div>
  );
}
