import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type StyledProps = {
	$isLarge?: boolean;
};

type Props = {
	title: string;
	isLarge?: boolean;
};

const PageHeroTitleWrapper = styled(motion.section)`
	background: var(--colour-white);
	position: relative;
	z-index: 1;
`;

const Inner = styled.div`
	padding: ${pxToRem(210)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(150)} 0;
	}
`;

const Title = styled(motion.h2)<StyledProps>`
	font-size: ${(props) => props.$isLarge ? pxToRem(80) : pxToRem(45)};
	line-height: ${(props) => props.$isLarge ? pxToRem(84) : pxToRem(55)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${(props) => props.$isLarge ? pxToRem(45) : pxToRem(25)};
		line-height: ${(props) => props.$isLarge ? pxToRem(44) : pxToRem(26)};
	}
`;

const PageHeroTitle = (props: Props) => {
	const {
		title,
		isLarge = false
	} = props;

	const [windowHeight, setWindowHeight] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const parallax = useTransform(
		scrollY,
		[0, windowHeight * 1.5],
		['translateY(0%)', 'translateY(75%)']
	);

	const blur = useTransform(
		scrollY,
		[0, windowHeight * 1.5],
		['blur(0px)', 'blur(10px)']
	);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);

	return (
		<PageHeroTitleWrapper
			ref={ref}
			style={{ transform: parallax }}
		>
			<LayoutWrapper>
				<Inner>
					{title && (
						<Title
							style={{ filter: blur }}
							$isLarge={isLarge}
						>
							{title}
						</Title>
					)}
				</Inner>
			</LayoutWrapper>
		</PageHeroTitleWrapper>
	);
};

export default PageHeroTitle;
