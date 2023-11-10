import styled from 'styled-components';
import client from '../client';
import { homePageQueryString, infoPageQueryString } from '../queries';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import PageHeroTitle from '../components/blocks/PageHeroTitle';
import Capabilities from '../components/blocks/Capabilities';
import { HomePageType } from '../shared/types/types';

type Props = {
	data: any;
	pageTransitionVariants: any;
	homeData: HomePageType;
};

const PageWrapper = styled(motion.div)`
	.capabilities {
		&__divider {
			display: none;
		}
	}
`;

const Page = (props: Props) => {
	const {
		data,
		homeData,
		pageTransitionVariants
	} = props;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<NextSeo
				title={data?.seoTitle || 'Aka'}
				description={data?.seoDescription || ''}
			/>
			<PageHeroTitle title={data?.introHeading} />
			<Capabilities data={homeData?.capabilities} />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await client.fetch(infoPageQueryString);
	const homeData = await client.fetch(homePageQueryString);

	return {
		props: {
			data,
			homeData
		},
	};
}

export default Page;
