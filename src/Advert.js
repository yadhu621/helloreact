import React from 'react';
import './Advert.css';


class Advert extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      birds: ['raven','peacock','parrot', 'kiwi', 'woodpecker', 'kingfisher'],
    }
  }

  render(){
    const {birds} = this.state
    return (
      <div className="Advert">
        <ul>
        {
            birds.map( bird => <li>{bird}</li> )
        }
        </ul>
      </div>
    );
  }
  
}

export default Advert;
