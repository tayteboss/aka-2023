export default {
	title: 'Home Page',
	name: 'homePage',
	type: 'document',
	fields: [
		{
			title: 'Reference Title',
			name: 'referenceTitle',
			type: 'string',
			description: 'This is an internal reference title.'
		},
		{
			title: 'SEO Title',
			name: 'seoTitle',
			type: 'string',
			description: 'This is the SEO title that appears in search engines.'
		},
		{
			title: 'SEO Description',
			name: 'seoDescription',
			type: 'string',
			description: 'This is the SEO description that appears in search engines.'
		},
		{
			title: 'Intro Heading',
			name: 'introHeading',
			type: "string",
		},
		{
			title: 'Capabilities',
			name: 'capabilities',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'capability'
						}
					]
				}
			]
		}
	]
}