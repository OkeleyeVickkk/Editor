<script>
import { Icon } from "@iconify/vue";
import data from "../../store";
import ImageEditOptionsSidePanel from "./panels/ImageEditOptionsSidePanel.vue";

export default {
	name: "ImageEditOptionsSidebar",
	components: {
		Icon,
		ImageEditOptionsSidePanel,
	},

	data: function () {
		return {
			icons: data.sidebarIcons,
			isPanelContainerActive: data.panel.isPanelContainerActive,
		};
	},
	methods: {
		setActive: function (clickedIconName, panelName) {
			this.isPanelContainerActive = panelName;
			this.icons = this.icons.map(function (currentIcon) {
				const { icon } = currentIcon;
				if (clickedIconName === icon) {
					return {
						...currentIcon,
						isActive: true,
					};
				}
				return {
					...currentIcon,
					isActive: false,
				};
			});
		},
	},
};
</script>
<template>
	<div class="grid place-content-center h-full w-auto duration-500 relative">
		<div class="flex flex-col justify-center items-center gap-y-3 w-24">
			<button
				@click="setActive(icon, panelName)"
				v-for="({ icon, iconName, isActive, panelName }, index) of icons"
				:key="index"
				:class="[
					'flex items-center justify-center flex-col hover:text-slate-400 border rounded-xl w-16 h-16 aspect-square gap-y-[2px] overflow-hidden hover:border-slate-50/20 transition duration-300',
					isActive ? 'border-slate-500/80 bg-slate-800/50 hover:text-slate-300 text-slate-300' : 'border-transparent text-icon-clr',
				]">
				<Icon :icon="icon" class="w-5 h-5" />
				<small class="capitalize text-[.675em] tracking-wider">{{ iconName }}</small>
			</button>
			<ImageEditOptionsSidePanel />
		</div>
	</div>
</template>
