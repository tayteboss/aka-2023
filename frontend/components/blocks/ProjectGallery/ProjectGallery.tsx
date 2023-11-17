import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import GallerySingleImage from './GallerySingleImage';
import GalleryPairImage from './GalleryPairImage';
import GalleryVideo from './GalleryVideo';

type Props = {
	data: any;
};

const ProjectGalleryWrapper = styled.section``;

const Inner = styled.div``;

const ProjectGallery = (props: Props) => {
	const {
		data
	} = props;

	const hasData = data?.length > 0;

	return (
		<ProjectGalleryWrapper>
			<LayoutWrapper>
				<Inner>
					{hasData && data.map((item: any, i: number) => {
						const isSingleImage = item.singleImageUrl
						const isPairImage = item.twoImagesUrls
						const isVideo = item.video

						console.log('item', item);
						

						return (
							<>
								{isSingleImage && (
									<GallerySingleImage
										data={item}
										key={`single=${i}`}
									/>
								)}
								{isPairImage && (
									<GalleryPairImage
										data={item}
										key={`pair=${i}`}
									/>
								)}
								{isVideo && (
									<GalleryVideo
										data={item}
										key={`video=${i}`}
									/>
								)}
							</>
						)
					})}
				</Inner>
			</LayoutWrapper>
		</ProjectGalleryWrapper>
	);
};

export default ProjectGallery;
