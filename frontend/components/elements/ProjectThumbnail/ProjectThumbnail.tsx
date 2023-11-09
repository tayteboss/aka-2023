import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	data: any;
};

const ProjectThumbnailWrapper = styled(motion.div)`
	position: fixed;
	top: ${pxToRem(45)};
	right: ${pxToRem(45)};
	width: 360px;
	height: 360px;
	z-index: 1000;
	border-radius: ${pxToRem(45)};
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		bottom: ${pxToRem(20)};
		right: ${pxToRem(20)};
	}
`;

const Inner = styled.div`
	background: orange;
	position: absolute;
	inset: 0;
	height: 100%;
	width: 100%;
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		y: 3,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const ProjectThumbnail = (props: Props) => {
	const {
		data
	} = props;

	return (
		<AnimatePresence>
			{data && (
				<ProjectThumbnailWrapper
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
					exit='hidden'
				>
					<Inner />
				</ProjectThumbnailWrapper>
			)}
		</AnimatePresence>
	);
};

export default ProjectThumbnail;
