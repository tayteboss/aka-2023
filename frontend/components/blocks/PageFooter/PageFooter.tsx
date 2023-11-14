import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: string;
};

const PageFooterWrapper = styled.section`
	margin-bottom: ${pxToRem(35)};
`;

const Inner = styled.div``

const String = styled.h4``;

const PageFooter = (props: Props) => {
	const {
		data
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<PageFooterWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<LayoutWrapper>
				<Inner>
					{data && (
						<String>{data}</String>
					)}
				</Inner>
			</LayoutWrapper>
		</PageFooterWrapper>
	);
};

export default PageFooter;
