import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	title: string;
	summary: string;
	status: string;
	slug: { current: string };
	thumbnailMedia: any;
	index: number;
	setThumbnailData: (data: any) => void;
};

const ProjectListCardWrapper = styled(motion.a)`
	padding: ${pxToRem(45)} 0;
	display: inline-block;
	position: relative;
	width: 100%;

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
	grid-column: 2 / 6;
`;

const Summary = styled(motion.p)`
	grid-column: 7 / 10;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const Status = styled(motion.p)`
	grid-column: 10 / -1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const Divider = styled(motion.div)`
	height: 1px;
	width: 100%;
	background: var(--colour-black);
	position: absolute;
	bottom: 0;
	left: 0;
`;

const summaryVariants = {
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

const statusVariants = {
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
			ease: 'easeInOut',
			delay: 0.2
		}
	}
};

const childVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	}
};

const ProjectListCard = (props: Props) => {
	const {
		title,
		summary,
		status,
		slug,
		thumbnailMedia,
		index,
		setThumbnailData
	} = props;

	const [isHovered, setIsHovered] = useState(false);
	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const ref = useRef<HTMLAnchorElement>(null);

	const { scrollY } = useScroll();

	const handleIndex = (index: number | undefined) => {
		if (!index) return;

		if (index < 10) {
			return `0${index}`;
		}

		return index;
	};

	const handleMouseOver = () => {
		setIsHovered(true);
		setThumbnailData(thumbnailMedia?.asset?.playbackId);
	};

	const handleMouseOut = () => {
		setIsHovered(false);
		setThumbnailData(null);
	};

	const opacity = useTransform(
		scrollY,
		[distanceToTop - windowHeight, distanceToTop - windowHeight + (windowHeight * 0.5)],
		[0, 1]
	);

	const xTranslate = useTransform(
		scrollY,
		[distanceToTop - windowHeight, distanceToTop],
		['translateX(-10px)', 'translateX(0px)']
	);

	useEffect(() => {
		if (ref?.current) {
			setDistanceToTop(window.pageYOffset + ref.current.getBoundingClientRect().top);
		}

		setWindowHeight(window.innerHeight);
	}, [distanceToTop]);

	return (
		<Link href={`/works/${slug.current}`} passHref scroll={false}>
			<ProjectListCardWrapper
				variants={childVariants}
				onMouseOver={() => handleMouseOver()}
				onMouseOut={() => handleMouseOut()}
				ref={ref}
				className="cursor-link"
			>
				<LayoutGrid>
					<Index
						className="type-h3"
						style={{ opacity }}
					>
						{handleIndex(index)}
					</Index>
					{title && (
						<Title
							style={{ opacity, transform: xTranslate }}
						>
							{title}
						</Title>
					)}
					{summary && (
						<Summary
							variants={summaryVariants}
							initial='hidden'
							animate={isHovered ? 'visible' : 'hidden'}
							className="type-h3"
						>
							{summary}
						</Summary>
					)}
					{status && (
						<Status
							variants={statusVariants}
							initial='hidden'
							animate={isHovered ? 'visible' : 'hidden'}
							className="type-h3"
						>
							{status}
						</Status>
					)}
				</LayoutGrid>
				<Divider
					className="capability-card__divider"
				/>
			</ProjectListCardWrapper>
		</Link>
	);
};

export default ProjectListCard;
