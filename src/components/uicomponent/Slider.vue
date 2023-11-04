<script>
export default {
	name: "Slider",
	props: ["brightnessLevel"],
	data: function () {
		return {
			isGrabbing: false,
		};
	},
	methods: {
		handleController: function () {
			this.isGrabbing = true;
		},
	},
};
</script>
<template>
	<div class="relative space-y-4 mt-3">
		<div class="flex items-center justify-between">
			<span class="v-name-of-feature">Brightness</span>
			<span class="v-am">{{ brightnessLevel }}</span>
		</div>
		<div class="relative h-1 bg-slate-600 rounded-full w-full" @click="runFunc">
			<div
				draggable="true"
				ref="mouse"
				:class="[
					'controller absolute transition-all duration-100 h-4 w-4 rounded-full bg-secondary-clr top-1/2 -translate-y-1/2 left-0',
					isGrabbing ? 'cursor-grabbing' : 'cursor-grab',
				]"></div>
		</div>
	</div>
</template>
