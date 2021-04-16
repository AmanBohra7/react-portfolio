import React, { Component } from 'react';
import AugmentedReality from './ProjectCategories/AugmentReality';
import Modelling from './ProjectCategories/Modelling';
import Programming from './ProjectCategories/Programming';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Projects">
                <AugmentedReality/>
                <Modelling/>
                <Programming/>
            </div>
         );
    }
}
 
export default Projects;