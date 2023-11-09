import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import useActiveLink from '../../../hooks/useActiveLink';

type StyledProps = {
	$isActive?: boolean;
};

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	color: var(--colour-white);
	mix-blend-mode: difference;
	z-index: 100;
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${pxToRem(13)} 0;
`;

const Logo = styled.a`
	font-size: ${pxToRem(22)};
	line-height: normal;
	color: var(--colour-white);
`;

const LinkWrapper = styled.div<StyledProps>`
	position: relative;

	&:hover {
		&:before {
			opacity: 1;
		}
	}

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		right: calc(100% + 5px);
		transform: translateY(-50%);
		height: ${pxToRem(13)};
		width: ${pxToRem(13)};
		border-radius: 50%;
		border: 1px solid var(--colour-white);
		background: ${(props) => props.$isActive ? 'var(--colour-white)' : 'transparant'};
		opacity: ${(props) => props.$isActive ? 1 : 0};

		transition: all var(--transition-speed-default) var(--transition-ease);
	}
`;

const MenuTag = styled.a`
	font-size: ${pxToRem(22)};
	line-height: normal;
	position: relative;
	color: var(--colour-white);
`;

const Header = () => {
	return (
		<HeaderWrapper className="header">
			<LayoutWrapper>
				<Inner>
					<Link href="/" passHref scroll={false}>
						<Logo>Aka Studio</Logo>
					</Link>
					<LinkWrapper $isActive={useActiveLink() === 'Work'}>
						<Link href="/work" passHref scroll={false}>
							<MenuTag>
								Work
							</MenuTag>
						</Link>
					</LinkWrapper>
					<LinkWrapper $isActive={useActiveLink() === 'Info'}>
						<Link href="/info" passHref scroll={false}>
							<MenuTag>
								Info
							</MenuTag>
						</Link>
					</LinkWrapper>
				</Inner>
			</LayoutWrapper>
		</HeaderWrapper>
	)
};

export default Header;
