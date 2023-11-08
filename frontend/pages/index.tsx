import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { homePageQueryString, siteSettingsQueryString } from '../queries';
import { HomePageType, SiteSettingsType } from '../shared/types/types';
import HomeFooter from '../components/blocks/HomeFooter';
import Capabilities from '../components/blocks/Capabilities';
import HomeIntroDescription from '../components/blocks/HomeIntroDescription';
import HomeHeroMedia from '../components/blocks/HomeHeroMedia';

const PageWrapper = styled.div``;

type Props = {
	data: HomePageType;
	siteSettings: SiteSettingsType;
};

const Page = (props: Props) => {
	const {
		data,
		siteSettings
	} = props;

	return (
		<PageWrapper>
			<NextSeo
				title={data?.seoTitle || 'Aka'}
				description={data?.seoDescription || ''}
			/>
			<HomeHeroMedia />
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
