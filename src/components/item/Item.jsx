import { useState } from "react";
import "./item.css";

const Item = ({ card }) => {
  const [showlogo, setShowlogo] = useState(true);

  const { name, img, options } = card;

  return (
    <div onClick={()=>{setShowlogo(!showlogo)}} className="card">
      {showlogo ? (
        <div>
          <img className="card-logo" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element}</li>; 
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
