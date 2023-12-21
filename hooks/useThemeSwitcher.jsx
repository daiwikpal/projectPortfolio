import { useEffect, useState } from 'react';

// const useThemeSwitcher = () => {
// 	const [theme, setTheme] = useState(
// 		typeof window !== 'undefined' ? localStorage.theme : ''
// 	);
// 	const activeTheme = theme === 'dark' ? 'light' : 'dark';

// 	useEffect(() => {
// 		const root = window.document.documentElement;

// 		root.classList.remove(activeTheme);
// 		root.classList.add(theme);
// 		localStorage.setItem('theme', theme);
// 	}, [theme, activeTheme]);

// 	return [activeTheme, setTheme];
// };

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState('dark');


	useEffect(() => {
		// Read from localStorage after the component has mount
		const storedTheme = localStorage.theme; 
		setTheme(storedTheme);
	}, []);

	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		if (typeof window !== 'undefined') {

			console.log(window.document.documentElement); 
			const root = window.document.documentElement;

			root.classList.remove(activeTheme);
			console.log("class list" + root.classList);
			root.classList.add(theme);
			window.localStorage.setItem('theme', theme);
		}
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};


export default useThemeSwitcher;

