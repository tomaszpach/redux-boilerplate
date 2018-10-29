import React, { Component } from 'react';

class Children extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>Name: Tomasz</div>
                <div>Age: 27</div>
                <div>Belt: Black</div>
            </div>
        )
    }
}

export default Children;