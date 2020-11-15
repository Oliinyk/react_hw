import React from "react";
import Card from "../Card/Card";
import ModalWrapper from '../ModalWrapper/ModalWrapper';

class CardsWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cardItems: props.users
		}

		this.removeElement = this.removeElement.bind(this)
		this.addCard = this.addCard.bind(this)
	}

	removeElement(index) {
		const cards = this.state.cardItems;
		cards.splice(index, 1);
		this.setState({ cardItems: cards })
	}

	addCard(data) {
		const cards = this.state.cardItems;
		const newCard = [
			{
				"id": Math.floor(Math.random()*999),
				"name": data.nameInput,
				"username": data.usernameInput,
				"email": data.emailInput,
				"address": {
				  "street": "-",
				  "suite": "-",
				  "city": "-",
				  "zipcode": "-"
				},
				"phone": data.phoneInput,
				"website": "-",
				"company": {
				  "name": "-",
				  "catchPhrase": "-",
				  "bs": "-"
				}
			}
		];
		
		// console.log('->', cards.concat(newCard));
		this.setState({ cardItems: cards.concat(newCard) })
	}

	render() {
		const { cardItems } = this.state;
		return (
			<div className="container">
				<div className="main">
					{ cardItems.map((card, index) => (
						<Card {...card} key={card.id} removeElement={this.removeElement} currentIndex={index} />
					))}
				</div>

				<div className="footer">
					<ModalWrapper addCard={this.addCard}  />
				</div>
			</div>
		)
	}
}

export default CardsWrapper;