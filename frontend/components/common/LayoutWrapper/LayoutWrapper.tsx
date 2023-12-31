import { ReactNode } from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children: ReactNode;
};

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${(props) => props.theme.layout.innerWrapper};
	padding-left: ${pxToRem(45)};
	padding-right: ${pxToRem(45)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-left: ${pxToRem(16)};
		padding-right: ${pxToRem(16)};
	}
`;

const LayoutWrapper = (props: Props) => (
	<Wrapper className="layout-wrapper">{props.children}</Wrapper>
);

export default LayoutWrapper;
