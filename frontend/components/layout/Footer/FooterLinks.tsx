import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import ArrowSvg from '../../svgs/ArrowSvg';

type Props = {
	addressRaw: [];
	addressUrl: string;
	instagramUrl: string;
	linkedInUrl: string;
};

const FooterLinksWrapper = styled.div`
	padding: 0 0 ${pxToRem(48)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(44)} 0 ${pxToRem(44)};
	}

	.layout-grid {
		align-items: end;
	}
`;

const DesktopWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const Copywrite = styled.div`
	grid-column: 1 / 3;
	opacity: 0.5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 1 / 4;
	}
`;

const Time = styled.p`
	grid-column: 3 / 4;
	opacity: 0.5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 4 / 5;
	}
`;

const TimeZone = styled.p`
	grid-column: 4 / 5;
	opacity: 0.5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 5 / 6;
	}
`;

const OfficeLink = styled.a`
	grid-column: 8 / 9;
	text-align: right;
	opacity: 0.5;

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		display: none;
	}

	&:hover {
		opacity: 1;
	}
`;

const SocialCol = styled.div`
	grid-column: 9 / 11;
	display: flex;
	justify-content: flex-end;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 8 / 10;
	}
`;

const ColInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const SocialLink = styled.a`
	opacity: 0.5;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		opacity: 1;
	}
`;

const MiscCol = styled.div`
	grid-column: 11 / -1;
	display: flex;
	justify-content: flex-end;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 10 / -1;
	}
`;

const MiscLink = styled.a`
	opacity: 0.5;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		opacity: 1;
	}
`;

const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${pxToRem(80)};
`;

const GoTopTrigger = styled.button`
	svg {
		transform: rotate(-90deg);
		height: ${pxToRem(14)};

		path {
			opacity: 0.5;
		}
	}
`;

const BottomBar = styled.div`
	display: flex;
	justify-content: space-between;
`;

const MobileTimeWraper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	column-gap: ${pxToRem(12)};
`;

const FooterLinks = (props: Props) => {
	const {
		addressRaw,
		addressUrl,
		instagramUrl,
		linkedInUrl,
	} = props;

	const [time, setTime] = useState(false);

	const handleGoTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const startTime = () => {
		let h: number | string = 0;
		let m: number | string = 0;
		let s: number | string = 0;
	
		const momentTime = moment().tz('Australia/Melbourne');
		h = momentTime.format('HH');
		m = momentTime.format('mm');
		s = momentTime.format('ss');

		// store time as 24 hour clock variable
		const newTime = `${h}:${m}`;
	
		setTime(newTime);
	};

	useEffect(() => {
		const timerId = setInterval(startTime, 1000);

		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<FooterLinksWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<DesktopWrapper>
				<LayoutGrid>
					<Copywrite>
						©{new Date().getFullYear().toString()}. aka studio.
					</Copywrite>
					<Time>{time || ''}</Time>
					<TimeZone>AEST</TimeZone>
					{addressUrl && (
						<OfficeLink href={addressUrl} target="_blank">
							Office
						</OfficeLink>
					)}
					<SocialCol>
						<ColInner>
							{instagramUrl && (
								<SocialLink href={instagramUrl} target="_blank">
									Instagram
								</SocialLink>
							)}
							{linkedInUrl && (
								<SocialLink href={linkedInUrl} target="_blank">
									LinkedIn
								</SocialLink>
							)}
						</ColInner>
					</SocialCol>
					<MiscCol>
						<ColInner>
							<MiscLink href="/privacy-policy">Privacy Policy</MiscLink>
							<MiscLink href="/terms-and-conditions">Terms & Conditions</MiscLink>
						</ColInner>
					</MiscCol>
				</LayoutGrid>
			</DesktopWrapper>
			<MobileWrapper>
				<TopBar>
					<GoTopTrigger onClick={() => handleGoTop()}>
						<ArrowSvg />
					</GoTopTrigger>
					<SocialCol>
						<ColInner>
							{instagramUrl && (
								<SocialLink href={instagramUrl} target="_blank">
									Instagram
								</SocialLink>
							)}
							{linkedInUrl && (
								<SocialLink href={linkedInUrl} target="_blank">
									LinkedIn
								</SocialLink>
							)}
						</ColInner>
					</SocialCol>
				</TopBar>
				<BottomBar>
					<Copywrite>
						©{new Date().getFullYear().toString()}. aka studio.
					</Copywrite>
					<MobileTimeWraper>
						<Time>{time || ''}</Time>
						<TimeZone>AEST</TimeZone>
					</MobileTimeWraper>
				</BottomBar>
			</MobileWrapper>
		</FooterLinksWrapper>
	);
};

export default FooterLinks;
