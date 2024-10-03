import Carousel from '../modules/Carousel/Carousel';
import Footer from '../modules/Footer/Footer';
import HeroSection from '../modules/HeroSection/HeroSection';
import NavBar from '../modules/NavBar/NavBar';

function MainTemplate() {
	const filmsWatched = [
		{
			source: 'https://image.tmdb.org/t/p/original/RMEXlMnlQt1llQ4Gv2IQHKcG4V.jpg',
			title: 'Suzume',
			rating: '7.6/10',
			poster: false,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/eUORREWq2ThkkxyiCESCu3sVdGg.jpg',
			title: 'The Batman',
			rating: '7.8/10',
			poster: false,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/jS4z8y70ESrZwmFJubqYuceFtnX.jpg',
			title: 'Spiderman: Across the Spider-verse',
			rating: '8.6/10',
			poster: false,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/gtGUvavuQoc7YKuS1QYXEEeiNXQ.jpg',
			title: 'Doctor Strange: The Multiverse of Madness',
			rating: '6.9/10',
			poster: false,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/nqUThBjou0TAWXu93Q4SNFpgqai.jpg',
			title: 'Spiderman: No Way Home',
			rating: '8.2/10',
			poster: false,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/9wXPKruA6bWYk2co5ix6fH59Qr8.jpg',
			title: 'Avenger: End Game',
			rating: '8.4/10',
			poster: false,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg',
			title: 'Kimi No Namae Wa',
			rating: '8.4/10',
			poster: false,
			topRating: false,
			newEpisode: false,
		},
	];

	const filmsTopRating = [
		{
			source: 'https://image.tmdb.org/t/p/original/oJdVHUYrjdS2IqiNztVIP4GPB1p.jpg',
			title: 'loki',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: true,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/mvphQkTzkMyeJ1E7YmLDc8nc7SS.jpg',
			title: 'alya-san/tokidoki-bossoto',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: true,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/ovExerXUMp9hG6NLdIQsvs6vHBR.jpg',
			title: 'tensura',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
			title: 'deadpool-2',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/ndlHzeb0WwdorqDzikjuQg9Lxw1.jpg',
			title: 'koe-no-katachi',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/11keFudto4QrgrXChukexJwdHPe.jpg',
			title: 'moon-knight',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: true,
		},
	];

	const filmsTrending = [
		{
			source: 'https://image.tmdb.org/t/p/original/isiGxhIx99SVIxrwZi8qeey4pZm.jpg',
			title: 'kimi-no-nawa',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg',
			title: 'dark-knight',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
			title: 'interstellar',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg',
			title: 'Deadpoll-n-Wolverine',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
			title: 'inside-out-2',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/lhaVFq4WHhxpTOoBfzATiE5vSEG.jpg',
			title: 'civil-war-2024',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
			title: 'no-way-home',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
			title: 'return-of-king',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
			title: 'parasite',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg',
			title: 'the-batman',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
	];

	const newRelease = [
		{
			source: 'https://image.tmdb.org/t/p/original/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg',
			title: 'Deadpoll-n-Wolverine',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/8mRrl8lc7TrbdA1PFzUhQ0nFZ7R.jpg',
			title: 'venom-3',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/dqZENchTd7lp5zht7BdlqM7RBhD.jpg',
			title: 'frieren',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: true,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/oJdVHUYrjdS2IqiNztVIP4GPB1p.jpg',
			title: 'loki',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: true,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/o7MpXc9OR90fuGNRpe4R1qxA02x.jpg',
			title: 'shikanoko',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: true,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/5cAuJOfd5tuuFBz2yQmBCtVBaj0.jpg',
			title: 'Beyond-the-Spider-Verse',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/lhaVFq4WHhxpTOoBfzATiE5vSEG.jpg',
			title: 'civil-war-2024',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/mvphQkTzkMyeJ1E7YmLDc8nc7SS.jpg',
			title: 'alya-san/tokidoki-bossoto',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: true,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
			title: 'planet-apes',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
			title: 'godzilla-kong',
			rating: '8.2/10',
			poster: true,
			topRating: false,
			newEpisode: false,
		},
		{
			source: 'https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
			title: 'inside-out-2',
			rating: '8.2/10',
			poster: true,
			topRating: true,
			newEpisode: false,
		},
	];

	return (
		<>
			<NavBar />
			<HeroSection />
			<Carousel title={'Melanjutan Film'} films={filmsWatched} />
			<Carousel title={'Top Rating Film dan Series Hari Ini'} films={filmsTopRating} />
			<Carousel title={'Film Trending'} films={filmsTrending} />
			<Carousel title={'Rilis Baru'} films={newRelease} />
			<Footer />
		</>
	);
}

export default MainTemplate;
