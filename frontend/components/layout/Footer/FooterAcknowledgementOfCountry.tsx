import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';

type Props = {
	data: string;
};

const FooterAcknowledgementOfCountryWrapper = styled.div`
	position: sticky;
	bottom: 0;
	left: 0;
	padding: ${pxToRem(30)} 0;
	z-index: 1;
	background: var(--colour-white);
	opacity: 0.5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(64)} 0;
	}
`;

const FooterAcknowledgementOfCountry = (props: Props) => {
	const {
		data
	} = props;

	return (
		<FooterAcknowledgementOfCountryWrapper>
			<LayoutWrapper>
				{data || ''}
			</LayoutWrapper>
		</FooterAcknowledgementOfCountryWrapper>
	);
};

export default FooterAcknowledgementOfCountry;
