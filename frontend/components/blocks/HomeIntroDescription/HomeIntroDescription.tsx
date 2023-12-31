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
	position: relative;
	z-index: 5;
	background: var(--colour-white);
	margin-top: 100vh;
`;

const Inner = styled.div`
	padding: ${pxToRem(246)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(146)} 0;
	}
`;

const Heading = styled(motion.div)`
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
		['blur(5px)', 'blur(0px)']
	);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);

	const dataArray = data.split('');

	return (
		<HomeIntroDescriptionWrapper className="performance" ref={ref}>
				<LayoutWrapper>
					<Inner>
						{data && (
							<Heading style={{ filter: blur }}>
								{dataArray.map((letter: string, i: number) => (
									<HeadingLetter letter={letter} key={i} />
								))}
							</Heading>
						)}
					</Inner>
				</LayoutWrapper>
		</HomeIntroDescriptionWrapper>
	);
};

export default HomeIntroDescription;
