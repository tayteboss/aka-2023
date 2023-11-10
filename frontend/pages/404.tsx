import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import PageHeroTitle from '../components/blocks/PageHeroTitle';

const PageWrapper = styled.div``;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo
				title="Aka | 404"
			/>
			<PageHeroTitle title="Sorry, we couldn't find that page." />
		</PageWrapper>
	)
}

export default Page;
