import MuxPlayer from '@mux/mux-player-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
	desktopMedia: any;
	mobileMedia: any;
};

const HomeHeroMediaWrapper = styled.section`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;

	mux-player {
		height: 100%;
		width: 100%;
	}
`;

const DesktopInner = styled(motion.div)`
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileInner = styled(motion.div)`
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const HomeHeroMedia = (props: Props) => {
	const {
		desktopMedia,
		mobileMedia
	} = props;

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
			<DesktopInner
				style={{ filter: blur, scale }}
			>
				{desktopMedia?.playbackId && (
					<MuxPlayer
						streamType="on-demand"
						playbackId={desktopMedia.playbackId}
						autoPlay="muted"
						loop={true}
						thumbnailTime={0}
						preload="auto"
						muted
						playsInline={true}
					/>
				)}
			</DesktopInner>
			<MobileInner
				style={{ filter: blur, scale }}
			>
				{mobileMedia?.playbackId && (
					<MuxPlayer
						streamType="on-demand"
						playbackId={mobileMedia.playbackId}
						autoPlay="muted"
						loop={true}
						thumbnailTime={0}
						preload="auto"
						muted
						playsInline={true}
					/>
				)}
			</MobileInner>
		</HomeHeroMediaWrapper>
	);
};

export default HomeHeroMedia;
