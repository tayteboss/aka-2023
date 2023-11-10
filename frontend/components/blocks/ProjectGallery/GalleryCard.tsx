import Image from 'next/image';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: any;
};

const GalleryCardWrapper = styled.div`
	position: relative;
	width: 100%;
	height: calc(100vh - 90px);
	border-radius: ${pxToRem(45)};
	overflow: hidden;
	margin-bottom: ${pxToRem(45)};
`;

const GalleryCard = (props: Props) => {
	const {
		data
	} = props;

	console.log('data', data);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<GalleryCardWrapper
			ref={ref}
			className={`view-element-image-scale-up ${
				inView ? 'view-element-image-scale-up--in-view' : ''
			}`}
		>
			{data?.asset && (
				<Image
					src={data.asset.url}
					layout="fill"
					objectFit="cover"
				/>
			)}
		</GalleryCardWrapper>
	);
};

export default GalleryCard;
