import { API_NINJA_KEY } from '$env/static/private'

export const appConfig = {
	title: 'N.DEV',
	description: "Nalaka Manathunga's personal website",
	url: 'https://nalaka.dev',

	social: {
		twitter: 'https://twitter.com/nalaka526',
		github: 'https://github.com/nalakaMM'
	},

	api: {
		quoteApi: {
            url: 'https://api.api-ninjas.com/v1/quotes',
            key: API_NINJA_KEY
        }
	}
};
