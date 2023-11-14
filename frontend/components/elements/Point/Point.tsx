import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import { PortableText } from '@portabletext/react';
import { useInView } from 'react-intersection-observer';

type Props = {
	title: string;
	description: [];
};

const PointWrapper = styled.div`
	&:not(:last-child) {
		margin-bottom: ${pxToRem(100)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			margin-bottom: ${pxToRem(48)};
		}
	}
`;

const Title = styled.p`
	opacity: 0.5;
	grid-column: 1 / 4;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(10)};
	}
`;

const ContentWrapper = styled.div`
	grid-column: 4 / 11;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
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

const Point = (props: Props) => {
	const {
		title,
		description
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<PointWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<LayoutGrid>
				{title && (
					<Title className="type-h3">
						{title}
					</Title>
				)}
				{description && (
					<ContentWrapper className="content">
						<PortableText value={description} />
					</ContentWrapper>
				)}
			</LayoutGrid>
		</PointWrapper>
	);
};

export default Point;
