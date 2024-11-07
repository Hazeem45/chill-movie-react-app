import { useEffect, useState } from 'react';

function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Mengatur event listener untuk perubahan ukuran jendela
		window.addEventListener('resize', handleResize);

		// Bersihkan event listener ketika komponen tidak digunakan lagi
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowWidth;
}

export default useWindowWidth;
