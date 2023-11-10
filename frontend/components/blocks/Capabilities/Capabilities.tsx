import styled from 'styled-components';
import { CapabilityType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import CapabilityCard from '../../elements/CapabilityCard';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: CapabilityType[];
};

const CapabilitiesWrapper = styled.section`
	background: var(--colour-white);
	position: relative;
	z-index: 5;
`;

const Title = styled.h3`
	margin-bottom: ${pxToRem(32)};
`;

const Divider = styled.div`
	width: 100%;
	height: 1px;
	background: var(--colour-black);
`;

const Capabilities = (props: Props) => {
	const {
		data
	} = props;

	const hasData = data && data.length > 0;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<CapabilitiesWrapper>
			<LayoutWrapper>
				<Title
					ref={ref}
					className={`view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					Capabilities
				</Title>
			</LayoutWrapper>
			<Divider
				className={`view-element-fade-in ${
					inView ? 'view-element-fade-in--in-view' : ''
				}`}
			/>
			<LayoutWrapper>
				{hasData && data.map((item, i) => (
					<CapabilityCard
						title={item.title}
						description={item.description}
						key={i}
						index={i + 1}
					/>
				))}
			</LayoutWrapper>
			<Divider className="capabilities__divider" />
		</CapabilitiesWrapper>
	);
};

export default Capabilities;
