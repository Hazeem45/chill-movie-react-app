import { useEffect, useState } from 'react';
import Icon from '../../elements/Icon';
import './Check.css';
import PropTypes from 'prop-types';

function Check({ id, type }) {
	const [isChecked, setIsChecked] = useState(false);
	const [checkedItems, setCheckedItems] = useState([]);

	useEffect(() => {
		const storedItems = JSON.parse(localStorage.getItem('checkedItems')) || [];
		setCheckedItems(storedItems);

		const itemExists = storedItems.some(item => item.id === id);
		setIsChecked(itemExists);
	}, [id]);

	const syncToLocalStorage = newItems => {
		setCheckedItems(newItems);
		localStorage.setItem('checkedItems', JSON.stringify(newItems));
	};

	const checkHandleClick = () => {
		const itemExists = checkedItems.some(item => item.id === id);

		let updatedItems;
		if (itemExists) {
			updatedItems = checkedItems.filter(item => item.id !== id);
		} else {
			updatedItems = [...checkedItems, { id, type }];
		}

		syncToLocalStorage(updatedItems);
		setIsChecked(!itemExists);
	};

	return <Icon iconClass={`check-circle ${isChecked ? 'fa-check' : 'fa-plus'}`} handleClick={checkHandleClick} />;
}

Check.propTypes = {
	id: PropTypes.number,
	type: PropTypes.string,
};

export default Check;
