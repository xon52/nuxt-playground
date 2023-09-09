// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// devtools: { enabled: true },
	modules: ['@nuxt/ui'],
	app: {
		head: {
			title: 'Nuxt Dojo',
			meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
		},
	},
	runtimeConfig: {
		rapidApiKey: process.env.RAPID_API_KEY,
	},
});
