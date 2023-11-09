import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type Props = {
	title: string;
	summary: string;
	status: string;
	slug: { current: string };
	scope: string[];
	setIsHovered: (isHovered: boolean) => void;
};

const ProjectGalleryCardWrapper = styled(motion.a)`
	&:hover {
		.project-gallery-card__image-wrapper {
			border-radius: ${pxToRem(20)};
		}

		.project-gallery-card__inner {
			filter: blur(0px) !important;
		}
	}
`;

const Inner = styled.div`
	transition: filter 500ms var(--transition-ease);
`;

const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
	border-radius: ${pxToRem(45)};
	overflow: hidden;
	margin-bottom: ${pxToRem(16)};

	transition: border-radius 500ms var(--transition-ease);
`;

const Image = styled.div`
	position: absolute;
	inset: 0;
	height: 100%;
	width: 100%;
	background: orange;
`;

const Title = styled.h2`
	margin-bottom: ${pxToRem(8)};
`;

const Summary = styled.p`
	font-size: ${pxToRem(24)};
	line-height: normal;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(18)};
	}
`;

const ScopeWrapper = styled.div`
	position: absolute;
	top: ${pxToRem(32)};
	left: ${pxToRem(32)};
	mix-blend-mode: difference;
	padding-right: ${pxToRem(32)};
`;

const Scope = styled.span`
	color: var(--colour-white);
	font-size: ${pxToRem(18)};
	line-height: normal;
	opacity: 0.5;
`;

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

const ProjectGalleryCard = (props: Props) => {
	const {
		title,
		summary,
		status,
		slug,
		scope,
		setIsHovered,
	} = props;

	const hasScope = scope && scope.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<Link href={`/work/${slug.current}`} passHref scroll={false}>
			<ProjectGalleryCardWrapper
				className="project-gallery-card"
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
				ref={ref}
				variants={childVariants}
			>
				<Inner className="project-gallery-card__inner">
					<ImageWrapper
						className={`project-gallery-card__image-wrapper view-element-image-scale-up ${
							inView ? 'view-element-image-scale-up--in-view' : ''
						}`}
					>
						<Image />
						{hasScope && (
							<ScopeWrapper>
								{scope.map((item, i) => (
									<Scope>
										{item}{i !== scope.length - 1 ? ' | ' : ''}
									</Scope>
								))}
							</ScopeWrapper>
						)}
					</ImageWrapper>
					{title && (
						<Title>{title}</Title>
					)}
					{(summary && status) && (
						<Summary>{summary} ({status})</Summary>
					)}
				</Inner>
			</ProjectGalleryCardWrapper>
		</Link>
	);
};

export default ProjectGalleryCard;
