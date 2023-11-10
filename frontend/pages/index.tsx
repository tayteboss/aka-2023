import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { homePageQueryString, siteSettingsQueryString } from '../queries';
import { HomePageType, SiteSettingsType, Transitions } from '../shared/types/types';
import HomeFooter from '../components/blocks/HomeFooter';
import Capabilities from '../components/blocks/Capabilities';
import HomeIntroDescription from '../components/blocks/HomeIntroDescription';
import HomeHeroMedia from '../components/blocks/HomeHeroMedia';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: HomePageType;
	siteSettings: SiteSettingsType;
	pageTransitionVariants: Transitions;
};

const Page = (props: Props) => {
	const {
		data,
		siteSettings,
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
			<HomeHeroMedia
				desktopMedia={siteSettings?.desktopLandingMedia}
				mobileMedia={siteSettings?.mobileLandingMedia}
			/>
			<HomeIntroDescription data={data?.introHeading} />
			<Capabilities data={data?.capabilities} />
			<HomeFooter
				email={siteSettings?.email}
				address={siteSettings?.address}
				addressUrl={siteSettings?.addressUrl}
			/>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(homePageQueryString);

	return {
		props: {
			data,
			siteSettings
		},
	};
}

export default Page;
