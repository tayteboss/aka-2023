import styled from 'styled-components';
import client from '../../client';
import { motion } from 'framer-motion';
import { ProjectType, Transitions } from '../../shared/types/types';
import { useEffect, useState } from 'react';
import { projectsQueryString, workPageQueryString } from '../../queries';
import { NextSeo } from 'next-seo';
import PageHeroTitle from '../../components/blocks/PageHeroTitle';
import Projects from '../../components/blocks/Projects';

const PageWrapper = styled(motion.div)`
	background: var(--colour-white);
`;

type Props = {
	data: {
		introHeading: string;
		seoDescription: string;
		seoTitle: string;
	};
	projects: ProjectType[];
	pageTransitionVariants: Transitions;
	cursorRefresh: () => void;
	setThumbnailData: (data: any) => void;
};

const Page = (props: Props) => {
	const {
		data,
		projects,
		pageTransitionVariants,
		cursorRefresh,
		setThumbnailData
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
				title={data?.seoTitle || ''}
				description={data?.seoDescription || ''}
			/>
			<PageHeroTitle title={data?.introHeading} />
			<Projects
				data={projects}
				cursorRefresh={cursorRefresh}
				setThumbnailData={setThumbnailData}
			/>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await client.fetch(workPageQueryString);
	const projects = await client.fetch(projectsQueryString);

	return {
		props: {
			data,
			projects
		},
	};
};

export default Page;
