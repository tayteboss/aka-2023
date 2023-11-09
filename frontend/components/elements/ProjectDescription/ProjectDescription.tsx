import styled from 'styled-components';

type Props = {
	data: [];
};

const ProjectDescriptionWrapper = styled.div``;

const ProjectDescription = (props: Props) => {
	const {
		data
	} = props;

	return (
		<ProjectDescriptionWrapper>
			ProjectDescription
		</ProjectDescriptionWrapper>
	);
};

export default ProjectDescription;
