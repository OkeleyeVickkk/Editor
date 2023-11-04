<script>
import data from "../../../../store";
import Slider from "../../../uicomponent/Slider.vue";
const { xScroll } = data.finetune.light.brightness;

export default {
	name: "FineTunePanel",
	components: {
		Slider,
	},
	data: () => ({
		brightness: xScroll,
	}),
	methods: {},
};
</script>

<template>
	<div class="">
		<div>
			<span>Light</span>
			<Slider :brightnessLevel="brightness" @emitValue="" />
		</div>
	</div>
</template>
