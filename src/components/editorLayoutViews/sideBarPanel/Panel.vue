<script>
import { KeepAlive } from "vue";

// panels
import PhotoImagePanel from "./PhotoImagePanel/PhotoImagePanel.vue";
import FineTunePanel from "./FinetunePanel/FinetunePanel.vue";
import CropPanel from "./CropPanel/CropPanel.vue";
import ResizePanel from "./ResizePanel/ResizePanel.vue";

// data
import data from "../../../store";

export default {
	name: "ImageEditOptionsSidePanel",
	props: {
		currentPanel: String,
		isPanelContainerActive: Boolean,
	},

	components: {
		KeepAlive,
		PhotoImagePanel,
		FineTunePanel,
		CropPanel,
		ResizePanel,
	},
	data: () => ({}),
};
</script>

<template>
	<aside
		@dblclick.self="isPanelContainerActive = false"
		:class="[
			'w-[272px] lg:h-full border-r transition-transform left-full flex flex-col justify-between border-r-border-clr p-4 bg-bar-clr text-white absolute z-[-1] top-0 bottom-0 my-auto panel',
			isPanelContainerActive ? 'active-panel' : '',
		]">
		<KeepAlive>
			<component :is="currentPanel"></component>
		</KeepAlive>
		<span class="text-xs select-none tracking-wider text-slate-500 text-center">Double click panel to close</span>
	</aside>
</template>

<style scoped>
.panel {
	transform: translateX(-300px);
	transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
	will-change: transform;
}
.active-panel {
	transform: translateX(0);
}
</style>
