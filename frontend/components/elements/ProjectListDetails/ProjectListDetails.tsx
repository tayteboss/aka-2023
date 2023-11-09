import styled from 'styled-components';

type Props = {
	summary: string;
	scope: string[];
	status: string;
};

const ProjectListDetailsWrapper = styled.div``;

const ProjectListDetails = (props: Props) => {
	const {
		summary,
		scope,
		status,
	} = props;

	return (
		<ProjectListDetailsWrapper>
			ProjectListDetails
		</ProjectListDetailsWrapper>
	);
};

export default ProjectListDetails;
