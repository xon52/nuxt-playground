export default defineEventHandler(async (event) => {
	// Handle query params
	const { name } = getQuery(event);

	// Handle post data
	const { age } = await readBody(event);

	return {
		message: `Hello ${name}! You are ${age} years old.`,
	};
});
