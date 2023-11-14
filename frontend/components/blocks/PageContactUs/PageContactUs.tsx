import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	title: string;
	cta: string;
};

const PageContactUsWrapper = styled.section`
	margin-bottom: ${pxToRem(60)};
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

const PageContactUs = (props: Props) => {
	const {
		title,
		cta
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<PageContactUsWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<LayoutWrapper>
				<Inner>
					{title && (
						<Heading className="type-h3">
							{title}
						</Heading>
					)}
					{cta && (
						<String className="type-h3">
							{cta}
						</String>
					)}
				</Inner>
			</LayoutWrapper>
		</PageContactUsWrapper>
	);
};

export default PageContactUs;
