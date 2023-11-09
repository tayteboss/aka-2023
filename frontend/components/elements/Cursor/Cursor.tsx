import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../../hooks/useMousePosition';
import { useRouter } from 'next/router';

type Props = {
	cursorRefresh: number;
};

type StyledProps = {
	$isHoveringLink?: boolean;
	$isOnDevice?: boolean;
	$isHoveringLargeLink?: boolean;
};

const CursorWrapper = styled.div<StyledProps>`
	mix-blend-mode: difference;
	height: 27px;
	width: 27px;
	z-index: 1000;
	position: fixed;
	display: ${props => props.$isOnDevice ? 'none' : 'block'};

	transition: opacity ${props => props.theme.transitionSpeed.default} ease;

	@media ${props => props.theme.mediaBreakpoints.mobile}
	{
		display: none;
	}
`;

const CursorRing = styled(motion.div)<StyledProps>`
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: ${props => props.$isHoveringLargeLink ? '-50px' : props.$isHoveringLink ? '-20px' : '-7px'};
	left: ${props => props.$isHoveringLargeLink ? '-50px' : props.$isHoveringLink ? '-20px' : '-7px'};
	height: ${props => props.$isHoveringLargeLink ? '100px' : props.$isHoveringLink ? '40px' : '15px'};
	width: ${props => props.$isHoveringLargeLink ? '100px' : props.$isHoveringLink ? '40px' : '15px'};
	background: ${(props) => props.$isHoveringLargeLink ? 'var(--colour-white)' : props.$isHoveringLink ? 'var(--colour-white)' : 'var(--colour-white)'};
	border-radius: 50%;
	mix-blend-mode: difference;
	pointer-events: none;
	text-align: center;
	z-index: 2;

	transition: height 300ms ease, width 300ms ease, background 200ms ease, top 300ms ease, left 300ms ease, border-radius 300ms ease;
`;

const Cursor = ({ cursorRefresh }: Props) => {
	const [isHoveringLink, setIsHoveringLink] = useState(false);
	const [isHoveringLargeLink, setIsHoveringLargeLink] = useState(false);
	const [isOnDevice, setIsOnDevice] = useState(false);
	const position = useMousePosition();
	const router = useRouter();

	let mouseXPosition = position.x;
	let mouseYPosition = position.y;

	const variantsWrapper = {
		visible: {
			x: mouseXPosition,
			y: mouseYPosition,
			transition: {
				type: 'spring',
				mass: 0.1,
				stiffness: 800,
				damping: 20,
				ease: 'linear'
			}
		}
	};

	const circleVariants = {
		hidden: {
			height: '0',
			width: '0'
		},
		visible: {
			height: '30px',
			width: '30px',
			transition: {
				duration: 1.5,
				ease: "easeInOut",
				type: 'spring',
				mass: 0.5,
				stiffness: 800,
				damping: 20,
			}
		}
	};

	const clearCursor = () => {
		setIsHoveringLink(false);
		setIsOnDevice(false);
	};

	useEffect(() => {
		const aTags = document.querySelectorAll('a');
		const buttonTags = document.querySelectorAll('button');
		const cursorLinks = document.querySelectorAll('.cursor-link');
		const cursorLinksLarge = document.querySelectorAll('.cursor-link--large');

		aTags.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		buttonTags.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		cursorLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		cursorLinksLarge.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLargeLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLargeLink(false);
			});
		});

		// checking if on a device
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			setIsOnDevice(true);
		} else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
			setIsOnDevice(true);
		}

		return function cleanUp() {
			setIsHoveringLink(false);
			setIsOnDevice(false);
		};
	}, [cursorRefresh]);

	// reset cursor on page change
	useEffect(() => {
		clearCursor();
	}, [router.pathname, router.asPath, router.query.slug]);

	return (
		<CursorWrapper
			$isOnDevice={isOnDevice}
			className="cursor-wrapper"
		>
			<CursorRing
				$isHoveringLink={isHoveringLink}
				$isHoveringLargeLink={isHoveringLargeLink}
				variants={variantsWrapper}
				animate="visible"
			>
			</CursorRing>
		</CursorWrapper>
	);
};

export default Cursor;
