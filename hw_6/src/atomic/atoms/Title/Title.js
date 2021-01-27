import React, { createElement } from 'react';

const Title = ({ children, className, h }) => {
	return createElement(`h${h}`, { className: className, children: children })
}

export default Title;