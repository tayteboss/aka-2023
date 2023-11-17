import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import Image from 'next/image';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: any;
};

const GalleryPairImageWrapper = styled.div`
	margin-bottom: ${pxToRem(45)};

	.layout-grid {
		row-gap: ${pxToRem(45)};
	}
`;

const ImageWrapper = styled.div`
	grid-column: span 6;
	height: 100vh;
	height: calc(100vh - 90px);
	border-radius: ${pxToRem(45)};
	overflow: hidden;
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const GalleryPairImage = (props: Props) => {
	const {
		data
	} = props;

	if (data?.twoImagesUrls === null)  return <></>;

	const hasData = data?.twoImagesUrls.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<GalleryPairImageWrapper
			ref={ref}
			className={`view-element-image-scale-up ${
				inView ? 'view-element-image-scale-up--in-view' : ''
			}`}
		>
			<LayoutGrid>
				{hasData && data?.twoImagesUrls.map((item: any, i: number) => (
					<ImageWrapper key={i}>
						<Image
							src={item}
							layout="fill"
							objectFit="cover"
						/>
					</ImageWrapper>
				))}
			</LayoutGrid>
		</GalleryPairImageWrapper>
	);
};

export default GalleryPairImage;
