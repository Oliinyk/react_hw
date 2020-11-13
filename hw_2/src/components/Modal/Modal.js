import React from "react";
import PropTypes from "prop-types";
import './Modal.css';

export default class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onClose = e => {
		this.props.onClose && this.props.onClose(e);
	};

	handleSubmit(e) {
		e.preventDefault();
		const formData = {};
		for (const field in this.refs) {
			formData[field] = this.refs[field].value;
		}
		this.props.addCard(formData);
		
		this.onClose();
	}

	render() {
		if (!this.props.show) {
			return null;
		}

		return (
			<div className="modal">
				<div className="modal-dialog">
					<h3>New user</h3>
					<form onSubmit={this.handleSubmit}>
						<div className="content">
							<div className="form-group">
								<label htmlFor="fieldName">Name</label>
								<input type="text" className="form-control" id="fieldName" placeholder="Enter name" ref="name" />
							</div>
							<div className="form-group">
								<label htmlFor="fieldUsername">Username</label>
								<input type="text" className="form-control" id="fieldUsername" placeholder="Enter username" ref="username" />
							</div>
							<div className="form-group">
								<label htmlFor="fieldEmail">Email address</label>
								<input type="email" className="form-control" id="fieldEmail" placeholder="Enter email" ref="email" />
							</div>
							<div className="form-group">
								<label htmlFor="fieldPhone">Phone</label>
								<input type="text" className="form-control" id="fieldPhone" placeholder="Enter phone" ref="phone" />
							</div>
						</div>
						<div className="actions">
							<button className="btn btn-error" onClick={this.onClose}>Close</button>
							<button type="submit" className="btn btn-success">Add</button>
						</div>
					</form>
				</div>
				<div className="modal-backdrop" onClick={this.onClose}></div>
			</div>
		);
	}
}
Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
};