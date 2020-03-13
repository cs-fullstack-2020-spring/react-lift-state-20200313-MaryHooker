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
    componentWillMount() {

    }
    //creating an arrow function for an event listener on our button/button will add 1 to age
    addOne = () => {
        //using variable to save our new state in
        let newAge = parseInt(this.state.age);
        //increment by 1
        newAge+=1;
        //using setState to change age to our newAge we defined above
        this.setState(
            {
                age: newAge
            }
        )
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
                {/* Using an inline handler within an element/Giving it the parameter of onclick for the event listener/ calling the previously made arrow function to run its method when you click the button*/}
                <button className='red' onClick={this.addOne}>Add One to Age</button>
            </div>
        )
    }
}

export default Person;

// Create a react app called people-app:
// 1. Create a class-based Person component that renders a name and an age
// 2. From the top-level component, create 2 Person components passing in a different name and age for each via props
// 3. Ensure your name and age displays correctly in each child component