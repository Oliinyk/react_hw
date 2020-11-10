import React, { useState } from 'react';
import './Card.css';

const Card = ({ name, username, email, address, phone, website, company, id, removeElement, currentIndex }) => {
  const [isSelected, setToggle] = useState(false);

  const handler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setToggle(!isSelected)
  }

  const cardClass = isSelected ? 'Card isSelected' : 'Card';

  return (
    <div className={cardClass}>
      
      <span className="Card_subTitle">id is: { id }</span>

      <p className="Card_name">{ name }</p>
      <p className="Card_username">{ username }</p>
      <p className="Card_email">{ email }</p>

      <h3> address: </h3>
      {/* <p className="Card_address">{ address }</p> */}
      <p className="Card_street">{ address.street }</p>
      <p className="Card_suite">{ address.suite }</p>
      <p className="Card_city">{ address.city }</p>
      <p className="Card_zipcode">{ address.zipcode }</p>

      <p className="Card_phone">{ phone }</p>
      <p className="Card_website">{ website }</p>
      {/* <p className="Card_company">{ company }</p> */}

      <button onClick={(e) => handler(e)}>Select me!</button>
      <button onClick={() => removeElement(currentIndex)}>Remove me!</button>
    </div>
  )
};


// class Card extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       isSelected: false
//     }
//   }
//
//   onStateChange() {
//     this.setState({ isSelected: !this.state.isSelected })
//   }
//
//   render() {
//
//     const { albumId, id, title, url } = this.props;
//     const { isSelected } = this.state;
//     const cardClass = isSelected ? 'Card isSelected' : 'Card';
//
//     return (
//       <div className={cardClass}>
//         <span>Album N: { albumId }</span>
//         <span className="Card_subTitle">My id is: { id }</span>
//         <h1 className="Card_title">{title}</h1>
//         <img className="Card_image" src={url} alt={title} />
//         <button onClick={() => this.onStateChange()}>Select me!</button>
//       </div>
//     );
//   }
// }

export default Card;
