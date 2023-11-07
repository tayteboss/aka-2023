import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import client from '../client';
import { homePageQueryString, siteSettingsQueryString } from '../queries';
import { HomePageType, SiteSettingsType } from '../shared/types/types';

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

	console.log('data', data);
	console.log('siteSettings', siteSettings);

	return (
		<PageWrapper>
			<NextSeo
				title={data?.seoTitle || 'Aka'}
				description={data?.seoDescription || ''}
			/>
			Home
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
