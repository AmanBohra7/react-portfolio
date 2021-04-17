import React, { Component } from "react";
import ModellerImage from "../images/project02.jpg";
import './Projects.css';
import './css/Models.css';

class Modelling extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="AugmentedReality ProjectTab">
        <div className="textInfo">
          <h1>3D Models</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt <br /> ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo <br /> dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est
          </p>
          <button>See more</button>
        </div>
        <div className="ModelsImage">
          <img src={ModellerImage} />
        </div>
      </div>
    );
  }
}

export default Modelling;
