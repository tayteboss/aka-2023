import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import ProjectListCard from '../../elements/ProjectListCard';

type Props = {
	data: ProjectType[];
	setThumbnailData: (data: any) => void;
};

const ProjectsListViewWrapper = styled(motion.div)``;

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

const ProjectsListView = (props: Props) => {
	const {
		data,
		setThumbnailData
	} = props;

	const hasData = data && data.length > 0;

	return (
		<ProjectsListViewWrapper
			variants={wrapperVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			{hasData && data.map((item, i) => (
				<ProjectListCard
					title={item.title}
					summary={item.summary}
					status={item.status}
					slug={item.slug}
					thumbnailMedia={item.thumbnailMedia}
					key={i}
					index={i + 1}
					setThumbnailData={setThumbnailData}
				/>
			))}
		</ProjectsListViewWrapper>
	);
};

export default ProjectsListView;
