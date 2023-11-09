import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import ProjectsListView from '../ProjectsListView';
import ProjectsGalleryView from '../ProjectsGalleryView';
import ViewSwitch from '../ViewSwitch';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

type Props = {
	data: ProjectType[];
	cursorRefresh: () => void;
};

const ProjectsWrapper = styled.section`
	border-top: 1px solid var(--colour-black);
	position: relative;
	z-index: 2;
`;

const Inner = styled.div`
	padding: ${pxToRem(16)} 0 ${pxToRem(52)};
	min-height: 100vh;
`;

const Projects = (props: Props) => {
	const {
		data,
		cursorRefresh
	} = props;

	const [galleryView, setGalleryView] = useState(true);

	useEffect(() => {
		cursorRefresh();
	}, [galleryView]);

	return (
		<ProjectsWrapper>
			<LayoutWrapper>
				<Inner>
					<ViewSwitch
						galleryView={galleryView}
						setGalleryView={setGalleryView}
					/>
					<AnimatePresence mode="wait">
						{galleryView && (
							<ProjectsGalleryView data={data} key={1} />
						)}
						{!galleryView && (
							<ProjectsListView data={data} key={2} />
						)}
					</AnimatePresence>
				</Inner>
			</LayoutWrapper>
		</ProjectsWrapper>
	);
};

export default Projects;
