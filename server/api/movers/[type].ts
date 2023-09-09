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
	let data = [];
	let error = undefined;
	// Get params
	const params = event.context.params;
	const type = params?.type as MoversDataSetType;
	// No type error
	if (!['gainers', 'actives', 'losers'].includes(type)) {
		error = createError({ statusCode: 405, statusMessage: 'Invalid parameter' });
		return error;
	}

	// Handle post data
	// const { age } = await readBody(event);
	let _data: MoversDataSet;
	const { rapidApiKey } = useRuntimeConfig();
	try {
		_data = await $fetch('https://morning-star.p.rapidapi.com/market/v2/get-movers', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': rapidApiKey,
				'X-RapidAPI-Host': 'morning-star.p.rapidapi.com',
			},
		});
	} catch (err) {
		error = createError({ statusCode: 404, statusMessage: 'Data not found' });
		return error;
	}

	data = _data[type];
	return data;
});
