import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            age: this.props.age
        }

         
    }

    //This is called component created and ready
    componentWillMount(){
         // example of setting state
         let ageInt = parseInt(this.state.age);//Make an integer from string
         ageInt += 5;//self increment
 
         this.setState(
             {
                 age: ageInt
             }
         );
    }

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