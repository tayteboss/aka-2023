import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import MuxPlayer from '@mux/mux-player-react';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: any;
};

const GalleryVideoWrapper = styled.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%;
	border-radius: ${pxToRem(45)};
	overflow: hidden;
	margin-bottom: ${pxToRem(45)};

	mux-player {
		height: 100%;
		width: 100%;
	}
`;

const Inner = styled.div`
	position: absolute;
	inset: 0;
	overflow: hidden;
`;

const GalleryVideo = (props: Props) => {
	const {
		data
	} = props;

	if (!data?.video?.asset?.playbackId) return <></>;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<GalleryVideoWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<Inner>
				{data?.video?.asset?.playbackId && (
					<MuxPlayer
						streamType="on-demand"
						playbackId={data.video.asset.playbackId}
						autoPlay="muted"
						loop={true}
						thumbnailTime={0}
						preload="auto"
						muted
						playsInline={true}
					/>
				)}
			</Inner>
		</GalleryVideoWrapper>
	);
};

export default GalleryVideo;
