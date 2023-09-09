type MoversDataPoint = {
	netChange: number;
	volume: number;
	ticker: string;
	performanceID: string;
	name: string;
	exchange: string;
	percentNetChange: number;
	lastPrice: number;
};

type MoversDataSet = {
	gainers: MoversDataPoint[];
	actives: MoversDataPoint[];
	losers: MoversDataPoint[];
};

type MoversDataSetType = 'gainers' | 'actives' | 'losers';

export default defineEventHandler(async (event) => {
	// Handle query params
	let { _type }: { _type: MoversDataSetType } = getQuery(event);
	const type: MoversDataSetType = _type ?? 'gainers';

	// Handle post data
	// const { age } = await readBody(event);

	const data: MoversDataSet = await $fetch('https://morning-star.p.rapidapi.com/market/v2/get-movers', {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '557544e047mshccaac272e5df2f6p1a4052jsn6c70132ee8a0',
			'X-RapidAPI-Host': 'morning-star.p.rapidapi.com',
		},
	});

	// Catch errors
	if (!data) {
		throw createError({ statusCode: 404, statusMessage: 'Data not found', fatal: true });
	}

	return data[type];
});
