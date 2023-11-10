import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: [];
};

const ProjectDescriptionWrapper = styled.div`
	* {
		font-size: ${pxToRem(22)};
		line-height: ${pxToRem(27)};
		max-width: ${pxToRem(1300)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(16)};
			line-height: normal;
		}
	}
`;

const ProjectDescription = (props: Props) => {
	const {
		data
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ProjectDescriptionWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{data && (
				<PortableText value={data} />
			)}
		</ProjectDescriptionWrapper>
	);
};

export default ProjectDescription;
