import React, {Component} from 'react';
import Children from './Children';

class App extends Component {
    state = {
        name: 'John',
        age: 35
    };

    handleClick = (e) => {
        this.setState({
            name: 'Yoshi',
            age: 19,
            input: ''
        });
        e.target.remove();
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: this.state.input
        })
    };


    render() {
        return (
            <div className="App">
                <h1>My name is {this.state.name} and Im {this.state.age}</h1>
                <button onClick={this.handleClick}>Click me to change name and age!</button>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit to update name</button>
                </form>
                <Children name="Tomasz" age="27" belt="black"/>
            </div>
        );
    }
}

export default App;
