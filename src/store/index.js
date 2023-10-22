import { reactive } from "vue";

export default reactive({
	//sidebar panel
	sidebarIcons: [
		{
			icon: "solar:gallery-edit-bold-duotone",
			iconName: "photo",
			panelName: "PhotoImagePanel",
			isActive: false,
			isDisabled: false,
		},
		{
			icon: "solar:crop-minimalistic-line-duotone",
			iconName: "crop",
			panelName: "CropPanel",
			isActive: false,
			isDisabled: false,
		},
		{
			icon: "solar:scale-line-duotone",
			iconName: "resize",
			panelName: "ResizePanel",
			isActive: false,
			isDisabled: false,
		},
		{
			icon: "solar:tuning-bold-duotone",
			iconName: "finetune",
			isActive: false,
			panelName: "FinetunPanel",
			isDisabled: false,
		},
	],
	panel: {
		isPanelContainerActive: true,
		currentActivePanel: null,
	},
});
