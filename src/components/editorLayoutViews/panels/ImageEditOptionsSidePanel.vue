<script>
import { KeepAlive } from "vue";

// panels
import PhotoImagePanel from "./PhotoImagePanel.vue";
import FinetunePanel from "./FinetunePanel.vue";
import CropPanel from "./CropPanel.vue";

// data
import data from "../../../store";

export default {
	name: "ImageEditOptionsSidePanel",

	components: {
		PhotoImagePanel,
		FinetunePanel,
		CropPanel,
		KeepAlive,
	},
	data: () => ({
		isPanelContainerActive: data.panel.isPanelContainerActive,
		currentPanel: data.panel.currentActivePanel,
	}),

	watch: {},
};
</script>

<template>
	<div class="w-[300px] lg:h-full bg-bar-clr text-white absolute left-full block top-0 bottom-0 my-auto">
		<KeepAlive>
			<component :is="currentPanel"></component>
		</KeepAlive>
	</div>
</template>
