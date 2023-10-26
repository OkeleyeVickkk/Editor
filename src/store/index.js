import { reactive } from "vue";

export default reactive({
	// gneral states
	error: "",
	isModalOpen: false,

	// images
	user_uploaded_images: [],
	first_six_random_images: [],
	uploaded_images_used_in_editor: [],
	images_from_api: [],

	//sidebar panel
	sidebarIcons: [
		{
			icon: "solar:gallery-edit-bold-duotone",
			iconName: "photo",
			panelName: "PhotoImagePanel",
			isActive: false,
			isDisabled: true,
			subPanels: {
				subPanelName: "",
			},
		},
		{
			icon: "solar:crop-minimalistic-line-duotone",
			iconName: "crop",
			panelName: "CropPanel",
			isActive: false,
			isDisabled: true,
			subPanels: {
				subPanelName: "",
			},
		},
		{
			icon: "solar:scale-line-duotone",
			iconName: "resize",
			panelName: "ResizePanel",
			isActive: false,
			isDisabled: true,
			subPanels: {
				subPanelName: "",
			},
		},
		{
			icon: "solar:tuning-bold-duotone",
			iconName: "finetune",
			panelName: "FineTunePanel",
			isActive: false,
			isDisabled: true,
			subPanels: {
				subPanelName: "",
			},
		},
	],
	panel: {
		isPanelContainerActive: false,
		currentActivePanel: null,
	},
});
