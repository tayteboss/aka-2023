export const siteSettingsQueryString = `
	*[_type == 'siteSettings'][0] {
		...,
		"desktopLandingMedia": desktopLandingMedia.asset->,
		"mobileLandingMedia": mobileLandingMedia.asset->,
	}
`;

export const homePageQueryString = `
	*[_type == 'homePage'][0] {
		...,
		"capabilities": capabilities[]->{
			...
		},
	}
`;

export const infoPageQueryString = `
	*[_type == 'infoPage'][0] {
		...,
	}
`;

export const workPageQueryString = `
	*[_type == 'workPage'][0] {
		...,
	}
`;

export const allProjectsQueryString = `
	*[_type == 'project'] [0...100] {
		slug
	}
`;

export const projectsQueryString = `
	*[_type == 'project'] | order(orderRank) [0...100] {
		...,
		thumbnailMedia{asset->},
	}
`;