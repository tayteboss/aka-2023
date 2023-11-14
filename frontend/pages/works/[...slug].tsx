import styled from 'styled-components';
import client from '../../client';
import { allProjectsQueryString } from '../../queries';
import { ProjectType, Transitions } from '../../shared/types/types';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import PageHeroTitle from '../../components/blocks/PageHeroTitle';
import ProjectDetails from '../../components/blocks/ProjectDetails';
import ProjectGallery from '../../components/blocks/ProjectGallery';
import ProjectCredits from '../../components/blocks/ProjectCredits';
import pxToRem from '../../utils/pxToRem';

type Props = {
	data: ProjectType;
	pageTransitionVariants: Transitions;
}

const PageWrapper = styled(motion.div)`
	background: var(--colour-white);
	padding-bottom: ${pxToRem(60)};
`;

const Page = (props: Props) => {
	const {
		data,
		pageTransitionVariants,
	} = props;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<NextSeo
				title={`Aka | ${data?.title}`}
				description={data?.summary || ""}
			/>
			<PageHeroTitle
				title={data?.title}
				isLarge={true}
			/>
			<ProjectDetails
				summary={data?.summary}
				scope={data?.scope}
				status={data?.status}
				description={data?.description}
			/>
			<ProjectGallery
				data={data?.imageGallery}
			/>
			<ProjectCredits
				data={data?.credits}
			/>
		</PageWrapper>
	);
};


export async function getStaticPaths() {
	const allCaseStudies = await client.fetch(allProjectsQueryString);

	return {
		paths: allCaseStudies.map((item: any) => {
			return `/works/${item?.slug?.current}`;
		}),
		fallback: true
	};
};

export async function getStaticProps({ params }: any) {
	const projectQuery = `
		*[_type == 'project' && slug.current == "${params.slug[0]}"][0] {
			...,
			thumbnailMedia{asset->},
			imageGallery[] {
				...,
				_type == "image" => {
					asset->
				},
			},
		}
	`;

	const data = await client.fetch(projectQuery);

	return {
		props: {
			data,
		},
	};
}

export default Page;
