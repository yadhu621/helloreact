import React from 'react';
import './Menubar.css';

const list = ['Home', 'About', 'Contact']

class Menubar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      birds: ['raven','peacock','parrot'],
      menuitems: list
    }
  }

  render(){
    const {menuitems, birds} = this.state
    return (
      <div className="Menu">
        <ul>
        {
            menuitems.map( item => 
              <li>{item}</li>
            )
        }
        </ul>
      </div>
    );
  }
  
}

export default Menubar;
