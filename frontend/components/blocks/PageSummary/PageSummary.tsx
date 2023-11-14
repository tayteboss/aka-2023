import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';

type Props = {
	data: string;
};

const PageSummaryWrapper = styled.section`
	background: var(--colour-white);
	border-top: 1px solid var(--colour-black);
	padding: ${pxToRem(24)} 0 ${pxToRem(180)};
	position: relative;
	z-index: 5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(24)} 0 ${pxToRem(100)};
	}
`;

const Inner = styled.div``;

const Heading = styled.h4`
	margin-bottom: ${pxToRem(16)};
	opacity: 0.5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(10)};
	}
`;

const String = styled.p`
	max-width: ${pxToRem(1350)};
`;

const PageSummary = (props: Props) => {
	const {
		data
	} = props;

	return (
		<>
			{data && (
				<PageSummaryWrapper>
					<LayoutWrapper>
						<Inner>
							<Heading className="type-h3">
								Summary
							</Heading>
							<String className="type-h3">
								{data}
							</String>
						</Inner>
					</LayoutWrapper>
				</PageSummaryWrapper>
			)}
		</>
	);
};

export default PageSummary;
