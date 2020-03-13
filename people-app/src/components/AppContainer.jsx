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

    //using an arrow function where each time we call it, it updates by 1
    updateAgeByOne = () =>{
        //using setState to change the intial state
        this.setState(
            {//should be able to update age property bc the initial age is already starting as an integer and not a string
                totalAges: this.state.totalAges+=1
            }
        )
    }


    render(){
        return(
            <div>
                {/* Set the current state inside of an h1 tag */}
                <h1 className='yellow'>Total of all ages is {this.state.totalAges}</h1>

            {/* Person is now a child of this component instead of App.js */}
            {/* using call back function inside element so it can be seen by the child component Person.jsx  */}
                <Person name='Mary' age='20'updateAge={this.updateAgeByOne}/>
                <Person name='Tom' age='40' updateAge={this.updateAgeByOne}/>
            </div>
         );
    }
}

export default AppContainer;