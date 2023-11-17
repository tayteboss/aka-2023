import { CaseIcon } from '@sanity/icons';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
	title: 'Project',
	name: 'project',
	type: 'document',
	icon: CaseIcon,
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: "project" }),
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200,
				slugify: input => input
						.toLowerCase()
						.replace(/\s+/g, '-')
						.slice(0, 200)
			},
			validation: Rule => Rule.required()
		},
		{
			title: "Summary",
			name: "summary",
			type: "string"
		},
		{
			title: "Scope",
			name: "scope",
			type: "array",
			of: [
				{
					type: "string",
				}
			]
		},
		{
			title: "Status",
			name: "status",
			type: "string"
		},
		{
			title: "Description",
			name: "description",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: "Normal", value: "normal"},
					],
					lists: [],
					marks: {
						decorators: [],
					}
				}
			]
		},
		{
			title: "Thumbnail Media",
			name: "thumbnailMedia",
			type: "mux.video"
		},
		{
			title: "Thumbnail Image",
			name: "thumbnailImage",
			type: "image",
			description: "Please only use Media or Image for the thumbnail, not both."
		},
		{
			name: 'imageGallery',
			title: 'Image Gallery',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'imageBlock',
					title: 'Image Block',
					fields: [
						{
							name: 'imageType',
							title: 'Image Type',
							type: 'string',
							options: {
								list: ['Single Image', 'Two Images Side by Side', 'Video'],
							},
						},
						{
							name: 'singleImage',
							title: 'Single Image',
							type: 'image',
							description: 'Select a single image',
							hidden: ({ parent }) => parent?.imageType !== 'Single Image',
						},
						{
							name: 'twoImages',
							title: 'Two Images',
							type: 'array',
							of: [{ type: 'image' }],
							description: 'Select two images to display side by side',
							hidden: ({ parent }) => parent?.imageType !== 'Two Images Side by Side',
							validation: (Rule) =>
								Rule.custom((images) => {
								if (images && images.length !== 2) {
									return 'You must select exactly two images for Two Images Side by Side.';
								}
									return true;
								}),
						},
						{
							title: 'Video',
							name: 'video',
							type: 'mux.video',
							description: 'Select a video',
							hidden: ({ parent }) => parent?.imageType !== 'Video',
						},
					],
				},
			],
		},
		{
			title: "Credits",
			name: "credits",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: "Normal", value: "normal"},
					],
					lists: [],
					marks: {
						decorators: [],
					}
				}
			]
		},
	]
}