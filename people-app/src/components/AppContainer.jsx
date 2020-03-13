import React, {Component} from 'react'
import Person from './Person';

class AppContainer extends Component{
    constructor(props){
        super(props);
        //Setting the initial state of totalAges to 0
        this.state = { 
            totalAges: 0
        }
    }
    render(){
        return(
            <div>
                {/* Set the current state inside of an h1 tag */}
                <h1 className='yellow'>Total of all ages is {this.state.totalAges}</h1>

            {/* Person is now a child of this component instead of App.js */}
                <Person name='Mary' age='20'/>
                <Person name='Tom' age='40'/>
            </div>
         );
    }
}

export default AppContainer;