import React, { Component } from "react";
import "./css/Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Footer">
        <h1>Let's get in Touch</h1>
        <p>
          You know about me now so let's get started. You can <br/> contact me anytime
          if you need any help.
        </p>
        <div class="refTags">
            <a href="">A</a>
            <a href="">B</a>    
            <a href="">B</a>
            <a href="">C</a>
        </div>
      </div>
    );
  }
}

export default Footer;
