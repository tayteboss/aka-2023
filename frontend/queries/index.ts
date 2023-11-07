export const siteSettingsQueryString = `
	*[_type == 'siteSettings'][0] {
		...,
	}
`;

export const homePageQueryString = `
	*[_type == 'homePage'][0] {
		...,
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