import { useEffect, useState } from 'react';
import Icon from '../../elements/Icon';
import { toast } from 'react-toastify';
import ConfirmToast from '../ConfirmToast/ConfirmToast';
import { getCustomToastConfig, getDefaultToastConfig } from '../../../utils/toastStyleConfig';
import PropTypes from 'prop-types';
import './Check.css';
import { useDispatch } from 'react-redux';
import { removeItemWatchList } from '../../../redux/slices/userSlice';

function Check({ id, type }) {
	const [isChecked, setIsChecked] = useState(false);
	const [checkedItems, setCheckedItems] = useState([]);
	const toastDefault = getDefaultToastConfig();
	const dispatch = useDispatch();

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
			dispatch(removeItemWatchList(id));
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
