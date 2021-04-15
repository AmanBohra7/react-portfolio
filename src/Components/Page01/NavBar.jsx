import React, { Component } from 'react';
import './css/page01.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="NavBar">
                <p id="name">Aman Bohra</p>
                <p>HOME</p>
                <p>PROJECTS</p>
                <p>CONTACT</p>
            </div>
         );
    }
}
 
export default NavBar;