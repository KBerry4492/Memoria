import React from "react";

import link from "./images/link.png"
import zelda from "./images/zelda.png"
import midna from "./images/midna.png"
import impa from "./images/impa.png"
import ganondorf from "./images/ganondorf.png"
import ghirahim from "./images/ghirahim.png"
import wizzro from "./images/wizzro.png"
import fi from "./images/fi.png"
import ruto from "./images/princess-ruto.png"
import darunia from "./images/darunia.png"
import sheik from "./images/sheik.png"
import imprisioned from "./images/the-imprisoned.png"

const images = [
	link, zelda, midna, impa, ganondorf, ghirahim, wizzro, fi, ruto, darunia, sheik, imprisioned
]

console.log(images)

const ImageCard = props => {

	console.log(props.image)

	let imgSrc = "";

	images.forEach(function(item){
		if (item.indexOf(props.image) !== -1) {
			imgSrc = item;
			}
		}
	)

  return (
    <div className="card" dataid={props.dataid}>
      <div className="img-container">
        <img alt={props.name} src={imgSrc} />
      </div>
	</div>
  );
};

export default ImageCard;