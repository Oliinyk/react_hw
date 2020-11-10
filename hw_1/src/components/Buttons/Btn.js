import React from 'react';

const Btn = ({ type }) => <button type="button" className={`btn btn-${type}`}>{type}</button>
export default Btn;
