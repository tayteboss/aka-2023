import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SassString } from 'sass';
import styled from 'styled-components';

const HomeHeroMediaWrapper = styled.section`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`;

const Inner = styled(motion.div)`
	height: 100%;
	width: 100%;
	background-image: url('/images/hero-placeholder.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const HomeHeroMedia = () => {
	const [windowHeight, setWindowHeight] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const scale = useTransform(
		scrollY,
		[0, windowHeight],
		[1, 1.05]
	);

	const blur = useTransform(
		scrollY,
		[0, windowHeight],
		['blur(0px)', 'blur(5px)']
	);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);

	return (
		<HomeHeroMediaWrapper ref={ref}>
			<Inner
				style={{ filter: blur, scale }}
			/>
		</HomeHeroMediaWrapper>
	);
};

export default HomeHeroMedia;
