import React from 'react';

import Card from "../Card/Card";

import { users } from "../users";


// const mockData = {
//   "albumId": 1,
//   "id": 1,
//   "title": "accusamus beatae ad facilis cum similique qui sunt",
//   "url": "https://via.placeholder.com/600/92c952",
//   "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// }

class CardsWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardItems: users
    }

    this.removeElement = this.removeElement.bind(this)
  }

  removeElement(index) {
    users.splice(index, 1);
    console.log(this)
    this.setState({ cardItems: users })
  }

  render() {
    const { cardItems } = this.state;

    return (
      <React.Fragment>
        { cardItems.map((props, index) => (
          <Card {...props} key={props.id} removeElement={this.removeElement} currentIndex={index} />
        ))}
      </React.Fragment>
    )
  }
}

export default CardsWrapper;
