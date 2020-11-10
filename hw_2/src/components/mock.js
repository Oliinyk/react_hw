export const mock = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  }
]

// export class Card extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       isSelected: false
//     };
//   }
//
//   stateHandler() {
//     this.setState({ isSelected: !this.state.isSelected })
//   }
//
//   render() {
//     const mainClass = this.state.isSelected ? 'Card isSelected' : 'Card'
//     return (
//       <div className={mainClass}>
//         <span className="Card_id">{ this.props.id }</span>
//         <h2 className="Card_title">{ this.props.title }</h2>
//         <img className="Card_image" src={this.props.url} />
//         <button onClick={() => this.stateHandler()}>Select</button>
//         <button onClick={() => this.props.removeElement(parseInt(this.props.index))}>Remove</button>
//       </div>
//     )
//   }
// }


// import React from 'react';
// import './App.css';
// import { Card } from "./sandbox/2#VDOM_Props_State/State";

// const mockData = {
//   "albumId": 1,
//   "id": 1,
//   "title": "accusamus beatae ad facilis cum similique qui sunt",
//   "url": "https://via.placeholder.com/600/92c952",
//   "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// }



// class App extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       elements: mock
//     };
//
//     this.removeElement = this.removeElement.bind(this)
//   }
//
//
//   removeElement(index) {
//     mock.splice(index, 1)
//     this.setState({ elements: mock })
//   }
//
//   render() {
//     return(
//       <React.Fragment>
//         {this.state.elements.map((props, index) => (
//           <Card key={props.id} {...props} removeElement={this.removeElement} index={index} />
//         ))}
//       </React.Fragment>
//     )
//   }
// }
//
// export default App;


// const mock = [
//   {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },
//   {
//     "albumId": 1,
//     "id": 2,
//     "title": "reprehenderit est deserunt velit ipsam",
//     "url": "https://via.placeholder.com/600/771796",
//     "thumbnailUrl": "https://via.placeholder.com/150/771796"
//   },
//   {
//     "albumId": 1,
//     "id": 3,
//     "title": "officia porro iure quia iusto qui ipsa ut modi",
//     "url": "https://via.placeholder.com/600/24f355",
//     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//   },
//   {
//     "albumId": 1,
//     "id": 4,
//     "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     "url": "https://via.placeholder.com/600/d32776",
//     "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//   },
//   {
//     "albumId": 1,
//     "id": 5,
//     "title": "natus nisi omnis corporis facere molestiae rerum in",
//     "url": "https://via.placeholder.com/600/f66b97",
//     "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//   }
// ]

