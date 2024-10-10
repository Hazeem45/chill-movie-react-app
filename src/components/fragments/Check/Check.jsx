import { useState } from 'react';
import Icon from '../../elements/Icon';
import './Check.css';

function Check() {
	const [isChecked, setIsChecked] = useState(false);

	return <Icon iconClass={`check-circle ${isChecked ? 'fa-check' : 'fa-plus'}`} handleClick={() => setIsChecked(!isChecked)} />;
}

export default Check;
