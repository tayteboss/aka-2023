import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import { PortableText } from '@portabletext/react';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: [];
};

const ProjectCreditsWrapper = styled.section``;

const Heading = styled.h3`
	margin-bottom: ${pxToRem(16)};
	opacity: 0.5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(10)};
	}
`;

const ContentWrapper = styled.div`
	a {
		text-decoration: underline;
	}

	* {
		font-size: ${pxToRem(22)};
		line-height: ${pxToRem(27)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(16)};
			line-height: normal;
		}
	}
`;

const ProjectCredits = (props: Props) => {
	const {
		data
	} = props;

	return (
		<>
			{data && (
				<ProjectCreditsWrapper>
					<LayoutWrapper>
						<Heading className="type-h3">Credits</Heading>
						<ContentWrapper>
							<PortableText value={data} />
						</ContentWrapper>
					</LayoutWrapper>
				</ProjectCreditsWrapper>
			)}
		</>
	);
};

export default ProjectCredits;
