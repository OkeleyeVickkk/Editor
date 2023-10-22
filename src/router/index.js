import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/views/LandingPage.vue";
import EditorPage from "../components/views/EditorPage.vue";

const appRoutes = [
	{
		path: "/",
		name: "HomePage",
		component: EditorPage,
	},
	{
		path: "/create",
		name: "EditorPage",
		component: LandingPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: appRoutes,
});

export default router;
