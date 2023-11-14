export default {
	title: 'Points',
	name: 'points',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
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
	]
}