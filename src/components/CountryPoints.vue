<script setup>
import Flag from './Flag.vue';

const props = defineProps({
	country: String,
	votes: Array
});
</script>

<template>
	<div class="flex p-2">
		<div class="flex flex-col w-48 text-right mr-2">
			<div class="flex justify-end"><Flag :country="props.country" /><span class="ml-2">{{ props.country }}</span></div>
		</div>
		<div v-for="rank in 17" :key="rank" class="flex-1 flex flex-col border-t border-gray-200 mt-2 items-center">
			<div class="text-xs text-gray-500 text-center mb-1">{{ rank }}</div>
			<div
				v-for="vote in props.votes.filter(vote => vote.rank === rank)"
				:class="vote.flagged ? 'border-red-500' : 'border-gray-500'"
				:title="vote.from"
				class="w-6 h-6 border-4 rounded-full mb-1"
			>
				<Flag class="opacity-50" :country="vote.from" />
			</div>
		</div>
	</div>
</template>
