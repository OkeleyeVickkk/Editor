<script>
import data from "../../../../store";
import handleImageUpload from "../../../../modules/imageHandler";
import { Icon } from "@iconify/vue";
import Modal from "../../../uicomponent/Modal.vue";

import axios from "axios";

export default {
	name: "PhotoImagePanel",

	components: {
		Icon,
		Modal,
	},
	data: () => ({
		error: data.error,
		user_uploaded_images: data.user_uploaded_images,
		api_images: data.first_six_random_images,
		isModalOpen: data.isModalOpen,
	}),
	methods: {
		openUserFileGallery: function () {
			this.$refs.fileInput.click();
		},
		handleUpload: async function (event) {
			const imageToBeEdited = event.target.files[0];
			if (!imageToBeEdited) {
				return;
			}
			const { result, error } = await handleImageUpload(imageToBeEdited);
			if (error && error.trim().length > 0) {
				this.error = error;
			} else {
				const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
				const newImage = {
					id: id,
					image: result,
				};
				this.user_uploaded_images.unshift(newImage);
			}
		},
		deleteThisImage: function (image) {
			let self = this;
			self.user_uploaded_images = self.user_uploaded_images.filter((currentImage) => currentImage.id !== image.id);
		},
		handleModal: function () {
			let self = this;
			self.isModalOpen = true;
		},
	},
	created() {
		(async () => {
			const unsplash_api_access_key = "-XU9oD759NXeVUPRv2mev4fTrS-oe2WafgvjcbSJ4rE";
			const response = await axios({
				baseURL: "https://api.unsplash.com/",
				url: "photos",
				params: {
					client_id: unsplash_api_access_key,
				},
			});
			const result = await response.data.slice(0, 6);
			this.api_images = result.map((image) => {
				const { id, urls, description } = image;
				return { id, images: urls, alt: description };
			});
		})();
	},
};
</script>

<template>
	<div>
		<input @change="handleUpload" accept="image/png, image/jpeg, image/webp, image/jpg" ref="fileInput" type="file" hidden class="appearance-none" />
		<h1 class="text-lg tracking-wide">Upload Image</h1>
		<div class="mt-4">
			<div>
				<button
					@click="openUserFileGallery"
					class="bg-secondary-clr hover:bg-secondary-clr/80 transition duration-300 text-[.86rem] w-full rounded-[4px] py-3 tracking-wide">
					Select Image
				</button>

				<button
					@click="handleModal"
					class="bg-slate-50/10 mt-2 transition duration-300 text-[.84rem] border flex items-center gap-x-2 justify-center overflow-hidden border-slate-500/70 w-full rounded-[4px] py-[9.5px] tracking-wider">
					<Icon icon="iconamoon:search-duotone" class="w-5 h-5" />
					<span class="">Search Unsplash Images</span>
				</button>
			</div>

			<ul v-if="user_uploaded_images.length > 0" class="grid grid-cols-2 gap-3 mt-4">
				<li v-for="image in user_uploaded_images" :key="image.id">
					<div
						:style="`background-image: url(${image.image});`"
						class="w-28 h-28 bg-no-repeat bg-center bg-cover overflow-hidden rounded-md flex items-end justify-center border border-border-clr/50 v-image p-2 relative before:absolute before:inset-0">
						<div class="flex items-center justify-end w-full">
							<button
								@click="deleteThisImage(image)"
								type="button"
								class="text-lg text-white transition-[background-color] duration-300 bg-secondary-clr hover:bg-secondary-clr/80 leading-none flex w-4 h-4 items-center justify-center rounded-sm">
								<Icon icon="lucide:x" class="w-3 h-3" />
							</button>
						</div>
					</div>
				</li>
			</ul>
			<ul v-else class="grid grid-cols-2 gap-3 mt-4">
				<li v-for="image in api_images" :key="image.id">
					<div
						:style="`background-image: url(${image.images.small ?? image.images.regular ?? image.images.thumb});`"
						class="w-28 h-28 bg-no-repeat bg-center bg-cover overflow-hidden rounded-md flex items-end justify-center border border-border-clr/50 v-image p-2 relative before:absolute before:inset-0"></div>
				</li>
			</ul>
		</div>
		<Modal :isModalOpen="isModalOpen" @close-modal="isModalOpen = false" />
	</div>
</template>
<style scoped>
.v-image {
	image-rendering: -webkit-optimize-contrast;
	isolation: isolate;
}
.v-image::before {
	-webkit-mask-image: linear-gradient(to bottom, #fff, rgba(0 0 0));
	mask-image: linear-gradient(to bottom, #fff, rgba(0 0 0));
	z-index: -1;
}
</style>
