export const getDirectorOrCreator = (data, type, result) => {
	if (type === 'movie') {
		const directors = data.credits.crew.filter(person => person.job === 'Director').map(director => director.name);
		if (directors.length > 0) {
			return (result.director = directors.join(', '));
		} else {
			return (result.director = 'N/A');
		}
	} else if (type === 'tv') {
		const creators = data.created_by.map(creator => creator.name);
		if (creators.length > 0) {
			return (result.creator = creators.join(', '));
		} else {
			const writer = data.credits.crew.filter(person => person.department === 'Writing').map(creator => creator.name);
			if (writer) {
				return (result.writer = writer.join(', '));
			} else {
				return (result.writer = 'N/A');
			}
		}
	}
};


export const getDurationOrEpisode = (data, type, result) => {
	if (type === 'movie') {
		const minutes = data.runtime;
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		const duration = `${hours}Hour ${mins}Min`;
		result.duration = duration;
	} else if (type === 'tv') {
		result.seasons = data.number_of_seasons;
		result.episodes = data.number_of_episodes;
	}
	return result;
};