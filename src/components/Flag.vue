<script setup>
import { computed } from 'vue';

const props = defineProps({
	country: String
});

const imgs = {
	'Australia': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1e6-1f1fa.png',
	'Azerbaijan': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1e6-1f1ff.png',
	'Belgium': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1e7-1f1ea.png',
	'Cyprus': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1e8-1f1fe.png',
	'Czech Republic': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1e8-1f1ff.png',
	'Estonia': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1ea-1f1ea.png',
	'Finland': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1eb-1f1ee.png',
	'Georgia': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1ec-1f1ea.png',
	'Germany': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1e9-1f1ea.png',
	'Ireland': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1ee-1f1ea.png',
	'Israel': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1ee-1f1f1.png',
	'Malta': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1f2-1f1f9.png',
	'Montenegro': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1f2-1f1ea.png',
	'North Macedonia': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1f2-1f1f0.png',
	'Poland': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1f5-1f1f1.png',
	'Romania': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1f7-1f1f4.png',
	'San Marino': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1f8-1f1f2.png',
	'Serbia': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1f7-1f1f8.png',
	'Spain': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1ea-1f1f8.png',
	'Sweden': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1f8-1f1ea.png',
	'United Kingdom': 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/32/1f1ec-1f1e7.png',
};

const url = computed(() => imgs[props.country]);
</script>

<template>
	<img v-if="url" :src="url">
</template>
