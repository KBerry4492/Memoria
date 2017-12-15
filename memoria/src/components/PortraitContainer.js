import React, { Component } from "react";
import ImageCard from "./ImageCard";
import images from "./images";


class PortraitContainer extends Component {
  state = {
    images: images,
    ImageCard: ImageCard,
    score: 0,
    game: 0
  };




  componentDidMount() {
    console.log("ping");
  }

  handleInputChange = event => {
    console.log(event.target)

    const {name, value } = event.target;

    this.setState({
      [name]: value
    });

  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.searchMovies(this.state.search);
  }



  render() {
    return (
      <div className="container">
        {this.state.images.map(image => (

          <ImageCard
            key={image.id}
            dataid={image.id}
            image={image.imageName}
            name={image.name}
          />
        ))}
      </div>
    );
  }

}

export default PortraitContainer;
