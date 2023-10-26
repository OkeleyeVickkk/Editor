<script>
import { Icon } from "@iconify/vue";
import data from "../../store";
import Panel from "./sideBarPanel/Panel.vue";
import Modal from "../uicomponent/Modal.vue";

export default {
	name: "ImageEditOptionsSidebar",
	components: {
		Icon,
		Modal,
		Panel,
	},

	data: () => ({
		icons: data.sidebarIcons,
		isPanelContainerActive: data.panel.isPanelContainerActive,
		currentPanel: data.panel.currentActivePanel,
	}),
	methods: {
		closeSideBarPanel: function () {},
		setActive: function (clickedIconName, panelName) {
			this.isPanelContainerActive = true;
			this.currentPanel = panelName;
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
	<div class="grid h-full w-auto duration-500 relative isolate">
		<div class="h-full bg-bar-clr grid border-r border-r-border-clr">
			<ul @dblclick.self="isPanelContainerActive = false" class="flex flex-col justify-start py-4 items-center gap-y-3 w-20 relative">
				<li v-for="({ icon, iconName, isActive, panelName }, index) of icons" :key="index">
					<button
						@click="setActive(icon, panelName)"
						:class="[
							'flex items-center justify-center flex-col hover:text-white border rounded-xl w-16 h-16 aspect-square gap-y-1 overflow-hidden hover:border-slate-50/20 transition duration-300',
							isActive ? 'border-slate-500/80 bg-slate-500/30 hover:text-slate-50 text-slate-50' : 'border-transparent text-slate-400',
						]">
						<Icon :icon="icon" class="w-5 h-5" />
						<small class="capitalize text-[.675em] tracking-wider">{{ iconName }}</small>
					</button>
				</li>
			</ul>
		</div>

		<Panel :currentPanel="currentPanel" :isPanelContainerActive="isPanelContainerActive" />
	</div>
</template>
