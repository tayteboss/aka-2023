import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	summary: string;
	scope: string[];
	status: string;
};

const ProjectListDetailsWrapper = styled.div`
	margin-bottom: ${pxToRem(120)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(60)};
	}
`;

const SummaryCol = styled.div`
	grid-column: 1 / 7;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / 4;
		margin-bottom: ${pxToRem(30)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
	}
`;

const Heading = styled.h4`
	margin-bottom: ${pxToRem(16)};
	opacity: 0.5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(10)};
	}
`;

const String = styled.p``;

const ScopeCol = styled.div`
	grid-column: 7 / 10;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 4 / -1;
		margin-bottom: ${pxToRem(30)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		grid-column: 1 / -1;
	}
`;

const ScopeWrapper = styled.div``;

const StatusCol = styled.div`
	grid-column: 10 / -1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const ProjectListDetails = (props: Props) => {
	const {
		summary,
		scope,
		status,
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ProjectListDetailsWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<LayoutGrid>
				{summary && (
					<SummaryCol>
						<Heading className="type-h3">
							Summary
						</Heading>
						<String className="type-h3">
							{summary}
						</String>
					</SummaryCol>
				)}
				{scope && (
					<ScopeCol>
						<Heading className="type-h3">Scope</Heading>
						<ScopeWrapper>
							{scope.map((item, i) => (
								<String
									key={i}
									className="type-h3"
								>
									{item}
								</String>
							))}
						</ScopeWrapper>
					</ScopeCol>
				)}
				{status && (
					<StatusCol>
						<Heading className="type-h3">Status</Heading>
						<String className="type-h3">{status}</String>
					</StatusCol>
				)}
			</LayoutGrid>
		</ProjectListDetailsWrapper>
	);
};

export default ProjectListDetails;
