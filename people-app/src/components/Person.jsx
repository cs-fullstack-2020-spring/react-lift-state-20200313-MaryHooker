import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        //using this.state to take the initial properties and be able to change them/or pass them up to a parent component
        this.state = {
            name: this.props.name,
            age: this.props.age
        }

         
    }

    //This is called component created and ready
    componentWillMount(){
         //Declaring another variable to hold the state property inside of a parseInt to be sure a number is returned
         let ageInt = parseInt(this.state.age);//Make an integer from string
         ageInt += 20;//self increment
 
         // example of setting state
         this.setState(
             {  //age equals now to the newly created variable above
                 age: ageInt
             }
         );
    }
//Do not put set state under render or it will continue to run the render function forever and send you an error
    render() {
      
        return (
            <div>
                <header>
                    <h1 className='pink'>Person Component Child</h1>
                </header>
                <h1 className='green'>Name: {this.state.name}</h1>
                <h1 className=' blue'>Age: {this.state.age}</h1>
            </div>
        )
    }
}

export default Person;

// Create a react app called people-app:
// 1. Create a class-based Person component that renders a name and an age
// 2. From the top-level component, create 2 Person components passing in a different name and age for each via props
// 3. Ensure your name and age displays correctly in each child component