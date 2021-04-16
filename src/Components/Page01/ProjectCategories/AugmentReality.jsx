import React, { Component } from "react";
import './Projects.css';
import './css/AugmentedReality.css';
import ARImage from '../images/AR.png';

class AugmentedReality extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="AugmentedReality ProjectTab">
        <div className="ARImage">
            <img src={ARImage}/>
        </div>
        <div className="textInfo">
          <h1>Augmented Reality</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt <br /> ut labore et 
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo  <br /> dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est{" "}
          </p>
          <button>See more</button>
        </div>
      </div>
    );
  }
}

export default AugmentedReality;
