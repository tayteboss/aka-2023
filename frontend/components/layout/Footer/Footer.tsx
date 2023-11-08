import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import FooterAcknowledgementOfCountry from './FooterAcknowledgementOfCountry';
import FooterLinks from './FooterLinks';
import FooterEmail from './FooterEmail';

const siteSettings = require('../../../json/siteSettings.json');

const FooterWrapper = styled.footer`
	position: relative;
	z-index: 5;
	background: var(--colour-white);
	border-top: 1px solid var(--colour-black);
`;

const Divider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 1px;
	width: 100%;
	background: var(--colour-black);
`;

const Inner = styled.div`
	position: relative;
	z-index: 5;
	background: var(--colour-white);
	border-bottom: 1px solid var(--colour-black);
`;

const Footer = () => {
	const {
		acknowledgementOfCountry,
		addressRaw,
		addressUrl,
		email,
		instagramUrl,
		linkedInUrl,
		emailCta
	} = siteSettings;

	return (
		<FooterWrapper>
			<Divider />
			<Inner>
				<LayoutWrapper>
					<FooterEmail
						email={email}
						title={emailCta}
					/>
					<FooterLinks
						addressRaw={addressRaw}
						addressUrl={addressUrl}
						instagramUrl={instagramUrl}
						linkedInUrl={linkedInUrl}
					/>
				</LayoutWrapper>
			</Inner>
			<FooterAcknowledgementOfCountry
				data={acknowledgementOfCountry}
			/>
		</FooterWrapper>
	)
};

export default Footer;