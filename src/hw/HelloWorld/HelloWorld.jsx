import React from "react";

class Hello extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            countFirst: 0,
            countSecond: 0
        }

        this.handleCounterFirst = this.handleCounterFirst.bind(this);
        this.handleCounterSecond = this.handleCounterSecond.bind(this);
    }

    handleCounterFirst(){
        this.setState({
            countFirst: this.state.countFirst + 1
        })
    }

    handleCounterSecond(){
        this.setState({
            countSecond: this.state.countSecond + 1
        })
    }


    render(){
        return(
            <div className="counter-wrapper">
                <>
                    <h1>Hello, World!</h1>
                    <p>This is a ont thing.</p>
                    <button onClick={this.handleCounterFirst}>Click me</button>
                    <p>I have been toggled {this.state.countFirst} times</p>
                </>
                <>
                    <h1>Hello, World!</h1>
                    <p>This is a ont thing.</p>
                    <button onClick={this.handleCounterSecond}>Click me</button>
                    <p>I have been toggled {this.state.countSecond} times</p>
                </>
            </div>
        )
    }
}

export default Hello;