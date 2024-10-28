import Button from '../../elements/Button';
import Image from '../../elements/Image';
import warning from '../../../assets/img/warning.png';
import './SubscriptionNotice.css';

function SubscriptionNotice() {
	return (
		<div className='subscription-notice'>
			<Image source={warning} />
			<div className='notice-wrapper'>
				<span className='notice-title'>
					<h3>Saat ini anda belum berlangganan</h3>
					<h3>Berlangganan</h3>
				</span>
				<p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
				<Button>mulai berlangganan</Button>
			</div>
		</div>
	);
}

export default SubscriptionNotice;
