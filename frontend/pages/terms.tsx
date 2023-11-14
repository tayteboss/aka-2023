import styled from 'styled-components';
import client from '../client';
import { termsPageQueryString } from '../queries';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import PageHeroTitle from '../components/blocks/PageHeroTitle';
import PageSummary from '../components/blocks/PageSummary';
import PageFooter from '../components/blocks/PageFooter';
import PageContactUs from '../components/blocks/PageContactUs';
import PagePoints from '../components/blocks/PagePoints';

type Props = {
	data: any;
	pageTransitionVariants: any;
};

const PageWrapper = styled(motion.div)``;

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants
	} = props;

	console.log('data', data);

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
			<PageSummary data={data?.summary} />
			<PagePoints />
			<PageContactUs />
			<PageFooter />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await client.fetch(termsPageQueryString);

	return {
		props: {
			data,
		},
	};
}

export default Page;
