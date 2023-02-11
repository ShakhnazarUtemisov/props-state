import React from "react";

class DarkLight extends React.Component{
  constructor(props){
    super(props)

      this.state = {
          checked: false
      }

      this.handleChangeMode = this.handleChangeMode.bind(this)  

    }  

    handleChangeMode(){
      this.setState({
        checked: !this.state.checked
      })      
    }

    render(){

      return(
        <div className={this.state.checked ? 'dark wrapper': 'light wrapper'} >
          <h1 >Render Props! </h1>
          <p>
            I was build with a two class components. A wrapper that handles state and state changing function, 
            and a child that uses that functionality.
          </p>

          <input 
            type="checkbox"
            id="check"
            onChange={this.handleChangeMode}
          />
          <label htmlFor="check">{this.state.checked ? 'Dark mode' : 'Light mode'}</label>
        </div>
      )
    }
}

export default DarkLight;
