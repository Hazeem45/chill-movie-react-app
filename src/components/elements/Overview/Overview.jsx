import PropTypes from 'prop-types';
import { useState } from 'react';
import './Overview.css';

function Overview({ children }) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<p className={`overview ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
			{children}
		</p>
	);
}

Overview.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Overview;
