import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsListViewWrapper = styled(motion.div)``;

const wrapperVariants = {
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

const ProjectsListView = () => {
	return (
		<ProjectsListViewWrapper
			variants={wrapperVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			ProjectsListView
		</ProjectsListViewWrapper>
	);
};

export default ProjectsListView;
