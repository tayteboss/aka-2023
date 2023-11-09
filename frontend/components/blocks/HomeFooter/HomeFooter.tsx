import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { useInView } from 'react-intersection-observer';

type Props = {
	email: string;
	address: [];
	addressUrl: string;
};

const HomeFooterWrapper = styled.section`
	padding: ${pxToRem(120)} 0 ${pxToRem(64)};
	background: var(--colour-white);
	position: relative;
	z-index: 5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(64)} 0;

		.layout-grid {
			row-gap: ${pxToRem(50)};
		}
	}
`;

const HomeFooterCard = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const Title = styled.h3`
	margin-bottom: ${pxToRem(18)};
`;

const LinkTag = styled.a``;

const ContentWrapper = styled.a`
	* {
		font-size: ${pxToRem(45)};
		line-height: ${pxToRem(55)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(25)};
			line-height: ${pxToRem(26)};
		}
	}
`;

const HomeFooter = (props: Props) => {
	const {
		email,
		address,
		addressUrl
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<HomeFooterWrapper>
			<LayoutWrapper>
				<LayoutGrid>
					{email && (
						<HomeFooterCard
							ref={ref}
							className={`view-element-fade-in ${
								inView ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							<Title>Contact</Title>
							<Link href={`mailto: ${email}`} passHref>
								<LinkTag className="type-h2">
									{email}
								</LinkTag>
							</Link>
						</HomeFooterCard>
					)}
					{(address && addressUrl) && (
						<HomeFooterCard
							className={`view-element-fade-in ${
								inView ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							<Title>Office</Title>
							<Link href={addressUrl} passHref>
								<ContentWrapper>
									<PortableText value={address} />
								</ContentWrapper>
							</Link>
						</HomeFooterCard>
					)}
				</LayoutGrid>
			</LayoutWrapper>
		</HomeFooterWrapper>
	);
};

export default HomeFooter;
