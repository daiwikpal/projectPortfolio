import {FaHeart} from 'react-icons/fa';

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/realstoman/nextjs-tailwindcss-portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Built with <FaHeart className="inline" /> using Next.js
				</a>
				.{' '}
			</div>
		</div>
	);
}

export default AppFooterCopyright;
