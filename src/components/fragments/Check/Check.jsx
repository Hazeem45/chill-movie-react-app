import { useEffect, useState } from 'react';
import Icon from '../../elements/Icon';
import './Check.css';
import PropTypes from 'prop-types';
import useFetchWatchList from '../../../hooks/useFetchWatchList';
import { getCustomToastConfig, getDefaultToastConfig } from '../../../utils/toastStyleConfig';
import { toast } from 'react-toastify';
import ConfirmToast from '../ConfirmToast/ConfirmToast';

function Check({ id, type }) {
	const [isChecked, setIsChecked] = useState(false);
	const [checkedItems, setCheckedItems] = useState([]);
	const toastDefault = getDefaultToastConfig();
	useFetchWatchList();

	const toastStyle = getCustomToastConfig({
		position: 'top-center',
		autoClose: 5000,
		closeOnClick: false,
		pauseOnHover: true,
	});

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

		const confirmRemoval = () => {
			updatedItems = checkedItems.filter(item => item.id !== id);
			syncToLocalStorage(updatedItems);
			setIsChecked(false);
			toast.dismiss();
			toast.info('Item removed from Favorite', toastDefault);
		};

		const cancelRemoval = () => {
			toast.dismiss();
		};

		if (itemExists) {
			toast(
				<ConfirmToast
					questionText='Are you sure you want to remove this item from favorites?'
					handleConfirm={confirmRemoval}
					handleCancel={cancelRemoval}
				/>,
				toastStyle,
			);
		} else {
			toast.success('Success add to Favorite', toastDefault);
			updatedItems = [...checkedItems, { id, type }];
			syncToLocalStorage(updatedItems);
			setIsChecked(true);
		}
	};

	return <Icon iconClass={`check-circle ${isChecked ? 'fa-check' : 'fa-plus'}`} handleClick={checkHandleClick} />;
}

Check.propTypes = {
	id: PropTypes.number,
	type: PropTypes.string,
};

export default Check;
