<script>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import { Icon } from "@iconify/vue";
import SearchBarOptions from "./SearchBarOptions.vue";
import ImageSearchResult from "./ImageSearchResult.vue";

export default {
	name: "Modal",
	props: ["isModalOpen"],
	emits: ["close-modal"],
	components: {
		TransitionRoot,
		TransitionChild,
		Dialog,
		DialogPanel,
		DialogTitle,
		Icon,
		SearchBarOptions,
		ImageSearchResult,
	},
	data: function () {
		return {
			searchTerm: "",
			page: 1,
			searchResult: [],
			tabOfOptions: [
				{ term: "Beach", isActive: false },
				{ term: "Mountain", isActive: false },
				{ term: "Art", isActive: false },
				{ term: "Sunset", isActive: false },
				{ term: "Flowers", isActive: false },
				{ term: "Food", isActive: false },
				{ term: "Technology", isActive: false },
				{ term: "Animals", isActive: false },
				{ term: "Cityscape", isActive: false },
				{ term: "Abstract", isActive: false },
				{ term: "Fashion", isActive: false },
			],
		};
	},
	methods: {
		closeModal: function () {
			this.$emit("close-modal");
		},
		handleTabSelected: function (selectedTab) {
			this.searchTerm = selectedTab;
			this.tabOfOptions = this.tabOfOptions.map(function (tab) {
				const { term } = tab;
				return term === selectedTab ? { ...tab, isActive: true } : { ...tab, isActive: false };
			});
		},
	},
};
</script>

<template>
	<TransitionRoot :show="isModalOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0">
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionChild>
			<div class="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex min-h-full justify-center md:p-4 text-center">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95">
						<DialogPanel
							class="w-full flex-grow flex flex-col max-w-screen-2xl h-full transform overflow-hidden md:rounded-2xl bg-bar-clr text-left min-h-screen md:min-h-[calc(100vh-2rem)] shadow-xl transition-all">
							<header class="flex items-center justify-between py-3 sm:px-6 px-3 border-b border-b-border-clr">
								<DialogTitle as="h3" class="text-lg font-medium leading-6 text-slate-300 tracking-wider">Image Search </DialogTitle>
								<button
									@click="closeModal"
									class="rounded-md text-white p-2 bg-transparent hover:bg-gray-600/40 transition-[background-color] duration-300">
									<Icon icon="iconamoon:sign-times-duotone" class="w-6 h-6" />
								</button>
							</header>
							<section class="flex-grow flex flex-col md:flex-row">
								<SearchBarOptions @selectTab="handleTabSelected" :tabOfOptions="tabOfOptions" v-model:searchTerm="searchTerm" />
								<ImageSearchResult :search="{ searchTerm, page }" :searchResult="searchResult" />
							</section>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
