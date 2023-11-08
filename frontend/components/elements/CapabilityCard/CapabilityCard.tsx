import styled from 'styled-components';
import { CapabilityType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CapabilityCardWrapper = styled.div`
	padding: ${pxToRem(45)} 0;
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(32)} 0;
	}

	.layout-grid {
		align-items: center;
	}

	&:last-child {
		.capability-card__divider {
			display: none;
		}
	}
`;

const Index = styled(motion.p)`
	grid-column: 1 / 2;
`;

const Title = styled(motion.h2)`
	grid-column: 2 / 8;
`;

const Description = styled(motion.h3)`
	grid-column: 9 / -1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const Divider = styled(motion.div)`
	height: 1px;
	background: var(--colour-black);
	position: absolute;
	bottom: 0;
	left: 0;
`;

const descriptionVariants = {
	hidden: {
		opacity: 0,
		filter: 'blur(10px)',
		x: -7,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	}
};

const CapabilityCard = (props: CapabilityType) => {
	const {
		title,
		description,
		index
	} = props;

	const [isHovered, setIsHovered] = useState(false);
	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const handleIndex = (index: number | undefined) => {
		if (!index) return;

		if (index < 10) {
			return `0${index}`;
		}

		return index;
	};

	const dividerWidth = useTransform(
		scrollY,
		[distanceToTop - windowHeight, (distanceToTop - windowHeight) + (windowHeight * 0.5)],
		['0%', '100%']
	);

	const opacity = useTransform(
		scrollY,
		[distanceToTop - windowHeight, distanceToTop - windowHeight + (windowHeight * 0.5)],
		[0, 1]
	);

	const xTranslate = useTransform(
		scrollY,
		[distanceToTop - windowHeight, distanceToTop - windowHeight + (windowHeight * 0.5)],
		['translateX(-7px)', 'translateX(0px)']
	);

	useEffect(() => {
		if (ref?.current) {
			setDistanceToTop(window.pageYOffset + ref.current.getBoundingClientRect().top);
		}

		setWindowHeight(window.innerHeight);
	}, [distanceToTop]);

	return (
		<CapabilityCardWrapper
			className="capability-card"
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			ref={ref}
		>
			<LayoutGrid>
				<Index
					className="type-h3"
					style={{ opacity }}
				>
					{handleIndex(index)}
				</Index>
				{title && (
					<Title style={{ opacity, transform: xTranslate }}>
						{title}
					</Title>
				)}
				{description && (
					<Description
						variants={descriptionVariants}
						initial='hidden'
						animate={isHovered ? 'visible' : 'hidden'}
					>
						{description}
					</Description>
				)}
			</LayoutGrid>
			<Divider
				className="capability-card__divider"
				style={{ width: dividerWidth }}
			/>
		</CapabilityCardWrapper>
	);
};

export default CapabilityCard;
