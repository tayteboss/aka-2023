import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeadingLetter from './HeadingLetter';

type Props = {
	data: string;
}

const HomeIntroDescriptionWrapper = styled(motion.section)`
	margin-top: calc(100vh + 150px);
	margin-top: calc(100dvh + 150px);
	position: relative;
	z-index: 5;
`;

const BlurPanel = styled(motion.div)`
	position: absolute;
	top: -100px;
	left: -25vw;
	height: 100%;
	width: 150vw;
	z-index: 1;
	background: var(--colour-white);
`;

const Outer = styled.div`
	position: relative;
	z-index: 2;
	background: var(--colour-white);
`;

const Inner = styled.div`
	padding: ${pxToRem(246)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(146)} 0;
	}
`;

const Heading = styled.div`
	color: var(--colour-white);
	mix-blend-mode: difference;
`;

const HomeIntroDescription = (props: Props) => {
	const {
		data
	} = props;

	const [windowHeight, setWindowHeight] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const blur = useTransform(
		scrollY,
		[0, windowHeight],
		['blur(50px)', 'blur(0px)']
	);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);

	const dataArray = data.split('');

	return (
		<HomeIntroDescriptionWrapper
			ref={ref}
		>
			<Outer>
				<LayoutWrapper>
					<Inner>
						{data && (
							<Heading>
								{dataArray.map((letter: string, i: number) => (
									<HeadingLetter letter={letter} key={i} />
								))}
							</Heading>
						)}
					</Inner>
				</LayoutWrapper>
			</Outer>
			<BlurPanel style={{ filter: blur }} />
		</HomeIntroDescriptionWrapper>
	);
};

export default HomeIntroDescription;
