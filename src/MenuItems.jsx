import React from 'react';

class MenuItems extends React.Component{
    render(){
      return(
        <li>{this.props.link}</li>
      )
    }
  }
  
export default MenuItems;