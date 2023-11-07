export default {
	title: "Site Settings",
	name: "siteSettings",
	type: "document",
	fields: [
		{
			title: "Desktop Landing Media",
			name: "desktopLandingMedia",
			type: "mux.video"	
		},
		{
			title: "Mobile Landing Media",
			name: "mobileLandingMedia",
			type: "mux.video"	
		},
		{
			title: "Instagram URL",
			name: "instagramUrl",
			type: "url"
		},
		{
			title: "LinkedIn URL",
			name: "linkedInUrl",
			type: "url"
		},
		{
			title: "Email",
			name: "email",
			type: "string"
		},
		{
			title: "Address",
			name: "address",
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
			title: "Address URL",
			name: "addressUrl",
			type: "url"
		},
		{
			title: "Acknowledgement of Country",
			name: "acknowledgementOfCountry",
			type: "string"
		}
	]
}