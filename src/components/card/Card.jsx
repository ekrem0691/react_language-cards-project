import { languages } from "../../helpers/data";
import Item from "../item/Item";

import React from "react";

// console.log(languages)

const Card = () => {
  // console.log(languages)
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => {
          return (
            // <Item {...item} key= {index} />
            // <Item data={{ ...item }} key={index} />
            <Item card={item} key= {index} />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
