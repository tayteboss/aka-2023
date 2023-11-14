import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Point from '../../elements/Point';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: any;
};

const PagePointsWrapper = styled.section`
	margin-bottom: ${pxToRem(150)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(100)};
	}
`;

const Inner = styled.div``;

const PagePoints = (props: Props) => {
	const {
		data
	} = props;

	const hasData = data && data.length > 0;

	return (
		<PagePointsWrapper>
			<LayoutWrapper>
				<Inner>
					{hasData && data.map((item: any, i: number) => (
						<Point
							title={item?.title}
							description={item?.description}
							key={i}
						/>
					))}
				</Inner>
			</LayoutWrapper>
		</PagePointsWrapper>
	);
};

export default PagePoints;
