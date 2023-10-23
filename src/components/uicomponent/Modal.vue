<script>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import { Icon } from "@iconify/vue";

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
	},
	methods: {
		closeModal: function () {
			this.$emit("close-modal");
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
			<div class="fixed inset-0 bg-black/30" aria-hidden="true" />
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
							class="w-full flex-grow max-w-screen-2xl h-full block transform overflow-hidden md:rounded-2xl bg-bar-clr text-left min-h-screen md:min-h-[calc(100vh-2rem)] shadow-xl transition-all">
							<header class="flex items-center justify-between py-4 sm:px-6 px-3 border-b border-b-border-clr">
								<DialogTitle as="h3" class="text-lg font-medium leading-6 text-slate-300 tracking-wider">Unsplash Image Library</DialogTitle>
								<button
									@click="closeModal"
									class="rounded-md text-white p-2 bg-transparent hover:bg-gray-600/40 transition-[background-color] duration-300">
									<Icon icon="iconamoon:sign-times-duotone" class="w-6 h-6" />
								</button>
							</header>
							<div class="pt-3 px-6">
								<p class="text-sm text-gray-500">
									Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
								</p>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
