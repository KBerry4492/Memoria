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




  componentDidMount() {
    console.log("ping");
  }

  // handleInputChange = event => {
  //   console.log(event.target)

  //   const {name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });

  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();

  //   this.searchMovies(this.state.search);
  // }



  render() {
    return (
      <div className="container">
        <div class="scoreCard">

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
              />
            </div>

           ))}

        </div>



      </div>
    );
  }

}

export default PortraitContainer;
