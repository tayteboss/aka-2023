import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import ArrowSvg from '../../svgs/ArrowSvg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
	email: string;
	title: string;
};

const FooterEmailWrapper = styled.div`
	padding: ${pxToRem(116)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const Title = styled.h3``;

const EmailWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: ${pxToRem(6)};

	svg {
		width: 18px;
	}
`;

const LinkTag = styled.a``;

const EmailText = styled.div``;

const ArrowWrapper = styled(motion.div)`
	display: flex;
	align-items: center;
`;

const arrowVariants = {
	hidden: {
		x: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		x: 4,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const FooterEmail = (props: Props) => {
	const {
		email,
		title
	} = props;

	const [isHovered, setIsHovered] = useState(false);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<FooterEmailWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{title && (
				<Title>{title}</Title>
			)}
			{email && (
				<EmailWrapper>
					<LinkTag
						href={`mailto: ${email}`}
						className="type-h3"
						onMouseOver={() => setIsHovered(true)}
						onMouseOut={() => setIsHovered(false)}
					>
						<EmailText
							className="type-h3"
						>
							Email Us.
						</EmailText>
					</LinkTag>
					<ArrowWrapper
						variants={arrowVariants}
						initial='hidden'
						animate={isHovered ? 'visible' : 'hidden'}
					>
						<ArrowSvg />
					</ArrowWrapper>
				</EmailWrapper>
			)}
		</FooterEmailWrapper>
	);
};

export default FooterEmail;
