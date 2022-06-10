import { defineConfig } from 'cypress';

export default defineConfig({
	env: {
		base_url: 'http://localhost:3000'
	},
	video: false,
	e2e: {
		// setupNodeEvents(on, config) {
		// 	// implement node event listeners here
		// }
	}
});
