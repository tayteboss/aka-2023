import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type StyledProps = {
	$isActive: boolean;
};

type Props = {
	galleryView: boolean;
	setGalleryView: (galleryView: boolean) => void;
};

const ViewSwitchWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: ${pxToRem(24)};
`;

const Button = styled.button<StyledProps>`
	font-size: ${pxToRem(22)};
	line-height: ${pxToRem(27)};
	opacity: ${(props) => props.$isActive ? 1 : 0.5};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const Pipe = styled.div`
	height: ${pxToRem(22)};
	width: 1px;
	background: var(--colour-black);
	margin: 0 ${pxToRem(12)};
`;

const ViewSwitch = (props: Props) => {
	const {
		galleryView,
		setGalleryView
	} = props;

	return (
		<ViewSwitchWrapper>
			<Button
				$isActive={galleryView}
				onClick={() => setGalleryView(true)}
				className="cursor-link"
			>
				Gallery
			</Button>
			<Pipe />
			<Button
				$isActive={!galleryView}
				onClick={() => setGalleryView(false)}
				className="cursor-link"
			>
				List
			</Button>
		</ViewSwitchWrapper>
	);
};

export default ViewSwitch;
