export const collectionTitles = [
	{ movie: 'Cars' },
	{ movie: 'Spider-Man: Across the Spider-Verse' },
	{ movie: 'Suzume no Tojimari' },
	{ series: 'Naruto: Shippūden' },
	{ movie: 'Top Gun: Maverick' },
	{ series: 'Loki' },
	{ series: 'That Time I Got Reincarnated as a Slime' },
	{ movie: 'Cars 3' },
	{ movie: 'Avengers: Endgame' },
	{ movie: 'Your Name' },
	{ movie: 'The Dark Knight' },
	{ movie: 'Interstellar' },
	{ movie: 'Deadpool 3' },
	{ series: 'Alya Sometimes Hides Her Feelings in Russian' },
	{ movie: 'Deadpool' },
	{ movie: 'Spider-Man: Into the Spider-Verse' },
	{ series: 'Sword Art Online' },
	{ series: '빅마우스' },
	{ movie: 'A Silent Voice' },
	{ series: 'The K2' },
	{ movie: 'Civil War' },
	{ movie: 'The Batman' },
	{ movie: 'Joker' },
	{ movie: 'Inside Out 2' },
	{ movie: 'Cars 2' },
	{ movie: 'The Last: Naruto the Movie' },
	{ series: 'Frieren: Beyond Journey\'s End' },
	{ movie: 'The SpongeBob SquarePants Movie' },
	{ series: 'I Can Hear Your Voice' },
	{ movie: '기생충' },
	{ movie: 'Despicable Me 4' },
	{ movie: 'Kingdom of the Planet of the Apes' },
	{ movie: 'Kung Fu Panda 4' },
	{ movie: '1917' },
	{ series: 'Black Clover' },
	{ movie: 'Train To Busan' },
	{ movie: 'Doctor Strange in the Multiverse of Madness' },
	{ movie: 'Transformers: Revenge of the Fallen' },
	{ series: 'Melting Me Softly' },
	{ movie: 'Hacksaw Ridge' },
];

export const updatedCollection = (itemDetails) => {
	switch (itemDetails.title) {
	case '1917':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'Alya Sometimes Hides Her Feelings in Russian':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: true, isTrending: false, isNewRelease: true, newEpisode: true, ageRating: 'PG-13' };
	case 'A Silent Voice: The Movie':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG' };
	case 'Avengers: Endgame':
		return { ...itemDetails, isWatched: true, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Big Mouth':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: true, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'Black Clover':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Cars':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'G-Rate' };
	case 'Cars 2':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: true, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'G-Rate' };
	case 'Cars 3':
		return { ...itemDetails, isWatched: true, isPremium: false, isTodayTrend: true, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'G-Rate' };
	case 'Civil War':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: true, isNewRelease: true, newEpisode: false, ageRating: 'R-Rate' };
	case 'Deadpool':
		return { ...itemDetails, isWatched: true, isPremium: false, isTodayTrend: true, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'Deadpool & Wolverine':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: true, isNewRelease: true, newEpisode: false, ageRating: 'R-Rate' };
	case 'Despicable Me 4':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: true, newEpisode: false, ageRating: 'PG' };
	case 'Doctor Strange in the Multiverse of Madness':
		return { ...itemDetails, isWatched: true, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Frieren: Beyond Journey\'s End':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: true, newEpisode: true, ageRating: 'PG-13' };
	case 'Hacksaw Ridge':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'I Hear Your Voice':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: true, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Interstellar':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: true, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Inside Out 2':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: true, isNewRelease: true, newEpisode: false, ageRating: 'PG' };
	case 'Joker':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: true, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'Kingdom of the Planet of the Apes':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: true, newEpisode: false, ageRating: 'PG-13' };
	case 'Kung Fu Panda 4':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: true, newEpisode: false, ageRating: 'PG' };
	case 'Loki':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: true, isTrending: false, isNewRelease: true, newEpisode: true, ageRating: 'PG-13' };
	case 'Melting Me Softly':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Naruto Shippūden':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Parasite':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: true, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'Spider-Man: Across the Spider-Verse':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG' };
	case 'Spider-Man: Into the Spider-Verse':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: true, isTrending: true, isNewRelease: false, newEpisode: false, ageRating: 'PG' };
	case 'Suzume':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG' };
	case 'Sword Art Online':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'The Batman':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: true, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'The Dark Knight':
		return { ...itemDetails, isWatched: true, isPremium: false, isTodayTrend: false, isTrending: true, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Top Gun: Maverick':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'The K2':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: true, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'The Last: Naruto the Movie':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG' };
	case 'The SpongeBob SquarePants Movie':
		return { ...itemDetails, isWatched: false, isPremium: true, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG' };
	case 'That Time I Got Reincarnated as a Slime':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: true, isTrending: false, isNewRelease: true, newEpisode: true, ageRating: 'PG-13' };
	case 'Train to Busan':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'R-Rate' };
	case 'Transformers: Revenge of the Fallen':
		return { ...itemDetails, isWatched: false, isPremium: false, isTodayTrend: false, isTrending: false, isNewRelease: false, newEpisode: false, ageRating: 'PG-13' };
	case 'Your Name.':
		return { ...itemDetails, isWatched: true, isPremium: true, isTodayTrend: false, isTrending: true, isNewRelease: false, newEpisode: false, ageRating: 'PG' };
	default:
		return itemDetails;
	}
};