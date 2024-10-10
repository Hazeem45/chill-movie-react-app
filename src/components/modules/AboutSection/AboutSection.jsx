import { Link } from 'react-router-dom';
import AgeRating from '../../elements/AgeRating/AgeRating';
import Icon from '../../elements/Icon';
import PropTypes from 'prop-types';
import './AboutSection.css';

function AboutSection({ details }) {
	const credits = {
		title: '',
		content: '',
	};

	if (details[0].type === 'movie') {
		credits.title = 'Director';
		credits.content = details[0].director;
	} else {
		if (details[0].creator) {
			credits.title = 'Creator';
			credits.content = details[0].creator;
		} else {
			credits.title = 'Writter';
			credits.content = details[0].writter;
		}
	}

	return (
		<section className='about-section'>
			<div className='details'>
				<div className='meta'>
					<span>
						<p>{details[0].year}</p>
					</span>
					<span>
						<p>{details[0].type === 'movie' ? details[0].duration : `${details[0].seasons} Season ${details[0].episodes} Episode`}</p>
					</span>
					<span>
						<AgeRating ageRating={details[0].ageRating} />
					</span>
					<span>
						<Icon iconClass={'fa-star'} iconStyle={{ fontSize: '16px', marginRight: '4px' }} />
						{details[0].rating}
					</span>
				</div>
				<div className='overview'>{details[0].overview}</div>
			</div>
			<div className='info'>
				<div className='info-item'>
					<span className='label'>Cast</span>
					<span>:</span>
					<span className='value'>{details[0].cast}</span>
				</div>
				<div className='info-item'>
					<span className='label'>Genre</span>
					<span>:</span>
					<span className='value'>{details[0].genre.join(', ')}</span>
				</div>
				<div className='info-item'>
					<span className='label'>{credits.title}</span>
					<span>:</span>
					<span className='value'>{credits.content}</span>
				</div>
				<Link to={details[0].fullCredit} target='_blank'>
					See Full Credit.
				</Link>
			</div>
		</section>
	);
}

AboutSection.propTypes = {
	details: PropTypes.array,
};

export default AboutSection;
