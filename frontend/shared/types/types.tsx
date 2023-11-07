export type MediaType = {
	media: [
		{
			webmVideoFile: {
				url: string;
			};
			mp4VideoFile: {
				url: string;
			};
			placeholderImage: {
				url: string;
			}
		}
	];
};

export type Transitions = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		}
	}
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number
		}
	}
};

export type CapabilityType = {
	title: string;
	description: string;
}

export type HomePageType = {
	capabilities: CapabilityType[];
	introHeading: string;
	seoTitle: string;
	seoDescription: string;
}

export type SiteSettingsType = {
	acknowledgementOfCountry: string;
	address: [];
	addressUrl: string;
	email: string;
	instagramUrl: string;
	linkedInUrl: string;
}