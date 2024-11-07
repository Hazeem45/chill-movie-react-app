import PropTypes from 'prop-types';
import Button from '../../elements/Button';
import './ConfirmToast.css';
import { toast } from 'react-toastify';

function ConfirmToast({ questionText, handleConfirm }) {
	return (
		<div className='confirm-toast-container'>
			<p className='confirm-toast-message'>{questionText}</p>
			<div className='confirm-button-wrapper'>
				<Button handleClick={handleConfirm} classBtn='confirm-toast-button'>
					Yes
				</Button>
				<Button handleClick={() => toast.dismiss()} classBtn='confirm-toast-cancel-button'>
					No
				</Button>
			</div>
		</div>
	);
}

ConfirmToast.propTypes = {
	questionText: PropTypes.string.isRequired,
	handleConfirm: PropTypes.func.isRequired,
};

export default ConfirmToast;
