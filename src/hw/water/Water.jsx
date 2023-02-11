import React from "react";

class Water extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            number: 0
        }

        this.handlePlusOne = this.handlePlusOne.bind(this)  
        this.handlePlusTen = this.handlePlusTen.bind(this)  
        this.handleMinusOne = this.handleMinusOne.bind(this)  
        this.handleMinusTen = this.handleMinusTen.bind(this)  
    }

    handlePlusOne(){
        this.setState({
            number: this.state.number + 1
        })
    }

    handlePlusTen(){
        this.setState({
            number: this.state.number + 10
        })
    }

    handleMinusOne(){
        this.setState({
            number: this.state.number - 1
        })
    }

    handleMinusTen(){
        this.setState({
            number: this.state.number - 10
        })
    }

    render(){
        return(
            <div className="water-wrapper">
                <p className={this.state.number > 0 ? 'water' : 'ice'}>{this.state.number > 0 ? 'Вода' : 'Лёд'} {this.state.number}</p>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handlePlusTen}>+10</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleMinusTen}>-10</button>
            </div>
        )
    }
}

export default Water;