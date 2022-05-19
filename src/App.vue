<script setup>
import { computed } from 'vue';
import countriesData from './data/countries.json'
import CountryPoints from './components/CountryPoints.vue';

const keyedByTo = computed(() => {
	const map = {};
	countriesData.forEach(vote => {
		if (!map[vote.to]) {
			map[vote.to] = [];
		}
		map[vote.to].push(vote);
	});
	return map;
});
const countries = computed(() => Object.keys(keyedByTo.value).sort());
</script>

<template>
	<div class="w-full p-4">
		<h1 class="text-xl mb-4">Results comparison of ESC 2022 semifinal 2 jury points</h1>

		<p class="mb-2">Circles represent ranking of the song by each jury. Red circles represent votes by juries of the 6 countries - Azerbaijan, Georgia, Montenegro, Poland, Romania, San Marino.</p>

		<p class="mb-4 text-gray-400 text-sm">
			Sources:<br />
			<a href="https://eurovision.tv/event/turin-2022/second-semi-final/results/australia">https://eurovision.tv/event/turin-2022/second-semi-final/results</a><br />
			<a href="https://eurovision.tv/mediacentre/release/ebu-statement-irregular-voting-2022">https://eurovision.tv/mediacentre/release/ebu-statement-irregular-voting-2022</a>
		</p>

		<div class="overflow-x-auto">
			<div class="min-w-600px">
				<CountryPoints
					v-for="country in countries"
					:key="country"
					:country="country"
					:votes="keyedByTo[country]"
				/>
			</div>
		</div>
	</div>
</template>
