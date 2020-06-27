import React from 'react';
import './Advert.css';

const list = ['Home', 'About', 'Contact']

class Advert extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      birds: ['raven','peacock','parrot', 'kiwi', 'woodpecker', 'kingfisher'],
      menuitems: list
    }
  }

  render(){
    const {menuitems, birds} = this.state
    return (
      <div className="Advert">
        <ul>
        {
            birds.map( item => <li>{item}</li> )
        }
        </ul>
      </div>
    );
  }
  
}

export default Advert;
