import React, { Component } from "react";
import ImageCard from "./ImageCard";
import images from "./images";
import './style.css';

class PortraitContainer extends Component {
  state = {
    images: images,
    ImageCard: ImageCard,
    playerScore: 0,
    game: 0
  };

  orderShuffle = imageArray => {

      let i = imageArray.length -1;
      for (; i>0; i--){
        const j = Math.floor(Math.random() * i);
        const tempArray = imageArray[i];
        imageArray[i] = imageArray[j];
        imageArray[j] = tempArray;
      }
      this.setState({ images: imageArray });
    }

  handleImageShuffle = event => {
    // event.clicked = true;
    console.log('-------------');
    console.log(event);
    console.log(event.target);

    if (event.clicked === "false") {
      this.setState({ playerScore: (this.state.playerScore)+1 });
      
    }

    else{
      this.setState({ playerScore: 0 });
    }


    this.orderShuffle(this.state.images);
  }

  render() {
    return (
      <div className="container">
        <div className="scoreCard">

          Score: <span className="scorebox"> {this.state.playerScore} </span> 
          &nbsp;&nbsp; Game: <span className="scorebox"> {this.state.game} </span>
          
        </div>
        <div className="picWrap">

          {this.state.images.map(image => (
            <div>
              <ImageCard
                key={image.id}
                dataid={image.id}
                image={image.imageName}
                name={image.name}
                handleImageShuffle={this.handleImageShuffle}
                clicked="false"
              />
            </div>

           ))}

        </div>



      </div>
    );
  }

}

export default PortraitContainer;
