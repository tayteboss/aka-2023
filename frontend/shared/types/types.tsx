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
	index?: number;
}

export type HomePageType = {
	capabilities: CapabilityType[];
	introHeading: string;
	seoTitle: string;
	seoDescription: string;
}

export type SiteSettingsType = {
	acknowledgementOfCountry: string;
	addressRaw: [];
	address: [];
	addressUrl: string;
	email: string;
	instagramUrl: string;
	linkedInUrl: string;
	desktopLandingMedia: any;
	mobileLandingMedia: any;
	emailCta: string;
}

export type ProjectType = {
	title: string;
	credits: [];
	description: [];
	imageGallery: any;
	scope: string[];
	slug: {
		current: string;
	}
	status: string;
	summary: string;
	thumbnailMedia: any;
	thumbnailImage: any;
}