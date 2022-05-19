import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/esc-2022-sf2-jury/',
	plugins: [
		vue(),
		Unocss({
			presets: [
				presetUno()
			]
		}),
	]
})
