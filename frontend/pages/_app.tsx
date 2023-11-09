import { useEffect, useState } from 'react';
import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import Layout from '../components/layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import use1vh from '../hooks/use1vh';
import { Transitions } from '../shared/types/types';
import useHeaderHeight from '../hooks/useHeaderHeight';
import Cursor from '../components/elements/Cursor';

const pageTransitionVariants: Transitions = {
	hidden: { opacity: 0, transition: { duration: 0.5 } },
	visible: { opacity: 1, transition: { duration: 0.5, delay: 1 } },
};

type Props = {
	Component: any; // TO BE UPDATED
	pageProps: {};
};

const App = (props: Props) => {
	const {
		Component,
		pageProps
	} = props;

	const [hasVisited, setHasVisited] = useState<boolean>(false);
	const [appCursorRefresh, setAppCursorRefresh] = useState(0);
	const [thumbnailData, setThumbnailData] = useState(null);

	const router = useRouter();
	const routerEvents = router.events;

	const handleExitComplete = (): void => {
		setThumbnailData(null);
		window.scrollTo(0, 0);

		setTimeout(() => {
			setAppCursorRefresh(appCursorRefresh + 1);
		}, 1000);
	};

	const handleCursorRefresh = (): void => {
		setTimeout(() => {
			setAppCursorRefresh(appCursorRefresh + 1);
		}, 1000);
	};

	use1vh();
	useHeaderHeight();

	useEffect(() => {
		const hasCookies = Cookies.get('visited');

		if (hasCookies) {
			setHasVisited(true);
		}

		const timer = setTimeout(() => {
			Cookies.set('visited', 'true', { expires: 1, path: '' });
		}, 5000);

		return () => {
			clearTimeout(timer);
		}
	}, []);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Layout>
					<AnimatePresence
						mode="wait"
						onExitComplete={() => handleExitComplete()}
					>
						<Component
							{...pageProps}
							key={router.asPath}
							pageTransitionVariants={pageTransitionVariants}
							cursorRefresh={() => handleCursorRefresh()}
							setThumbnailData={setThumbnailData}
						/>
					</AnimatePresence>
				</Layout>
				<Cursor
					cursorRefresh={() => setAppCursorRefresh(appCursorRefresh + 1)}
					thumbnailData={thumbnailData}
				/>
			</ThemeProvider>
		</>
	);
}

export default App;
