import React, { Component } from "react";
import "./css/page01.css";
import image01 from '../Page01/images/image01.png';

class UserInfo extends Component {
  constructor(props) {
    super(props); 
    this.state = {};
  }
  render() {
    return (
      <div className="UserInfo">
        <div className="greetings">
          <p>HELLO!</p>
          <p id="greetings-p">
            I'm Aman Bohra and <br />
            I'm a Software Engineer
          </p>
        </div>
        <div className="userImage">
            <img src={image01} />
        </div>
      </div>
    );
  }
}

export default UserInfo;
