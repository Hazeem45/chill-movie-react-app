import PropTypes from 'prop-types';
import Button from '../../elements/Button';
import './ConfirmToast.css';

function ConfirmToast({ questionText, handleConfirm, handleCancel }) {
	return (
		<div className='confirm-toast-container'>
			<p className='confirm-toast-message'>{questionText}</p>
			<div className='confirm-button-wrapper'>
				<Button handleClick={handleConfirm} classBtn='confirm-toast-button'>
					Yes
				</Button>
				<Button handleClick={handleCancel} classBtn='confirm-toast-cancel-button'>
					No
				</Button>
			</div>
		</div>
	);
}

ConfirmToast.propTypes = {
	questionText: PropTypes.string.isRequired,
	handleConfirm: PropTypes.func.isRequired,
	handleCancel: PropTypes.func.isRequired,
};

export default ConfirmToast;
