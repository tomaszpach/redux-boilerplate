import React, {Component} from 'react';
import Children from './Children';
import AddCharacter from './AddCharacter';

// Container component with state made by class
class App extends Component {
    state = {
        // name: 'John', // doesnt need anymore - see removed render method part
        // age: 35, // doesnt need anymore - see removed render method part

        characters: [
            {name: 'Mario', age: 27, belt: 'black', id: 1},
            {name: 'Luigi', age: 26, belt: 'black', id: 2},
            {name: 'Yoshi', age: 19, belt: 'green', id: 3}
        ]
    };

    // it is removed with button inside render method
    // handleClick = (e) => {
    //     this.setState({
    //         name: 'Yoshi',
    //         age: 19,
    //         input: ''
    //     });
    //     e.target.remove();
    // };

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

    addCharacter = (character) => {
        character.id = Math.random();
        let characters = [...this.state.characters, character];

        this.setState({
            characters: characters
        })
    };

    deleteCharacter = (id) => {
        let characters = this.state.characters.filter(character => {
            return character.id !== id
        });
        this.setState({
            characters: characters
        })
    };


    render() {
        return (
            <div className="App">
                {/*<h1>My name is {this.state.name} and Im {this.state.age}</h1>*/}
                {/*<button onClick={this.handleClick}>Click me to change name and age!</button>*/}

                {/*<form onSubmit={this.handleSubmit}>*/}
                    {/*<input type="text" onChange={this.handleChange} />*/}
                    {/*<button>Submit to update name</button>*/}
                {/*</form>*/}

                <h1>Hello World</h1>
                <Children characters={this.state.characters} deleteCharacter={this.deleteCharacter}/>
                <AddCharacter addCharacter={this.addCharacter}/>
            </div>
        );
    }
}

export default App;
