export default {
	title: 'Privacy Page',
	name: 'privacyPage',
	type: 'document',
	fields: [
		{
			title: 'Reference Title',
			name: 'referenceTitle',
			type: 'string',
			description: 'This is an internal reference title.'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			description: 'NOTE: Please do not change this value.',
			options: {
				source: 'referenceTitle',
				maxLength: 200,
				slugify: input => input
						.toLowerCase()
						.replace(/\s+/g, '-')
						.slice(0, 200)
			},
			validation: Rule => Rule.required()
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
			title: 'Summary',
			name: 'summary',
			type: "string",
		},
		{
			title: 'Points',
			name: 'points',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'points'
						}
					]
				}
			]
		},
		{
			title: 'Contact Us Title',
			name: 'contactUsTitle',
			type: "string",
		},
		{
			title: 'Contact Us CTA',
			name: 'contactUsCTA',
			type: "string",
		},
		{
			title: 'Footer CTA',
			name: 'footerCTA',
			type: "string",
		}
	]
}