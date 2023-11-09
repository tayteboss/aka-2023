import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import ProjectListDetails from '../../elements/ProjectListDetails';
import ProjectDescription from '../../elements/ProjectDescription';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	summary: string;
	scope: string[];
	status: string;
	description: [];
};

const ProjectDetailsWrapper = styled.section`
	background: var(--colour-white);
	border-top: 1px solid var(--colour-black);
	padding: ${pxToRem(24)} 0 ${pxToRem(200)};
	position: relative;
	z-index: 5;
`;

const ProjectDetails = (props: Props) => {
	const {
		summary,
		scope,
		status,
		description
	} = props;

	return (
		<ProjectDetailsWrapper>
			<LayoutWrapper>
				<ProjectListDetails
					summary={summary}
					scope={scope}
					status={status}
				/>
				<ProjectDescription
					data={description}
				/>
			</LayoutWrapper>
		</ProjectDetailsWrapper>
	);
};

export default ProjectDetails;
