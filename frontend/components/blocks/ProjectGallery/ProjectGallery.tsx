import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import GalleryCard from './GalleryCard';

type Props = {
	data: any;
};

const ProjectGalleryWrapper = styled.div``;

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
					{hasData && data.map((item: any, i: number) => (
						<GalleryCard
							data={item}
							key={i}
						/>
					))}
				</Inner>
			</LayoutWrapper>
		</ProjectGalleryWrapper>
	);
};

export default ProjectGallery;
