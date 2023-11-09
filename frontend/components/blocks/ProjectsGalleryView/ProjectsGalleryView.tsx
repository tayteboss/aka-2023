import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import ProjectGalleryCard from '../../elements/ProjectGalleryCard';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';
import { useState } from 'react';
import { motion } from 'framer-motion';

type StyledProps = {
	$isHovered: boolean;
};

type Props = {
	data: ProjectType[];
};

const ProjectsGalleryViewWrapper = styled(motion.div)<StyledProps>`
	.layout-grid {
		row-gap: ${pxToRem(32)};
	}

	.project-gallery-card {

		&__inner {
			filter: ${(props) => props.$isHovered ? 'blur(2px)' : 'none'};
		}

		&:nth-child(4n + 1) {
			grid-column: 1 / 10;

			@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
				grid-column: 1 / 9;
			}
	
			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / -1;
			}

			.project-gallery-card__image-wrapper {
				padding-top: 105.52%;
			}
		}

		&:nth-child(4n + 2) {
			grid-column: 10 / -1;

			@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
				grid-column: 9 / -1;
			}
	
			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / -1;
			}

			.project-gallery-card__image-wrapper {
				padding-top: 152.1%;
			}
		}

		&:nth-child(4n + 3) {
			grid-column: 8 / -1;
	
			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / -1;
			}

			.project-gallery-card__image-wrapper {
				padding-top: 100%;
			}
		}

		&:nth-child(4n + 4) {
			grid-column: 1 / 9;
	
			@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
				grid-column: 1 / -1;
			}

			.project-gallery-card__image-wrapper {
				padding-top: 52.6%;
			}
		}
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0,
			ease: 'easeInOut',
			when: 'afterChildren',
			staggerChildren: 0.1
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0,
			ease: 'easeInOut',
			when: 'beforeChildren',
			staggerChildren: 0.1
		}
	}
};

const ProjectsGalleryView = (props: Props) => {
	const {
		data
	} = props;

	const [isHovered, setIsHovered] = useState(false);

	const hasData = data && data.length > 0;

	return (
		<ProjectsGalleryViewWrapper
			$isHovered={isHovered}
			variants={wrapperVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<LayoutGrid>
				{hasData && data.map((item, i) => (
					<ProjectGalleryCard
						title={item.title}
						summary={item.summary}
						status={item.status}
						slug={item.slug}
						scope={item.scope}
						key={i}
						setIsHovered={setIsHovered}
					/>
				))}
			</LayoutGrid>
		</ProjectsGalleryViewWrapper>
	);
};

export default ProjectsGalleryView;
