/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'ai-102': "url('/public/assets/ai-102.jpg')",
			}
		}
	},
	plugins: [],
}
