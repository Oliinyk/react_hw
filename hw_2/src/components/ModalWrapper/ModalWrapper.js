import React from 'react';
import Modal from "../Modal/Modal";

export default class ModalWrapper extends React.Component {
	state = {
		show: false
	};
	showModal = e => {
		this.setState({
		show: !this.state.show
		});
	};
	render() {
		const {addCard} = this.props;
		return (
		<div>
			<button className="btn btn-default" onClick={e => { this.showModal(e); }}>Add user</button>
			<Modal onClose={this.showModal} show={this.state.show} addCard={addCard}></Modal>
		</div>
		);
	}
}