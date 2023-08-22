// since there's no dynamic data here, we can prerender

import { appConfig } from '$lib/config';

// it so that it gets served as a static asset in production
export const prerender = true;

const getQuote = async () => {
	const res = await fetch(`${appConfig.api.quoteApi.url}?category=inspirational`, {
		headers: {
			'X-Api-Key': appConfig.api.quoteApi.key
		}
	});

	console.log(appConfig.api)

	if (res.ok) {
		const data = await res.json();
		return data[0];
	}

    return null;
};

export const load = async () => {
	const quote = await getQuote();
	return {
		quote
	};
};
