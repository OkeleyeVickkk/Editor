<script>
import axios from "axios";
import data from "../../store";

export default {
	props: {
		search: Object,
	},
	data: function () {
		return {
			images: data.images_from_api,
			loading: false,
			error: data.error,
		};
	},

	watch: {
		search(newValue) {
			if (newValue && newValue.searchResult instanceof Array) {
			}
		},
		images(newImagesFromSearch, previousImages) {},
	},
	created() {
		let self = this;
		self.loading = true;
		(async () => {
			const unsplash_api_access_key = "-XU9oD759NXeVUPRv2mev4fTrS-oe2WafgvjcbSJ4rE";

			const response = await axios({
				baseURL: "https://api.unsplash.com/",
				url: "photos",
				params: {
					client_id: unsplash_api_access_key,
					per_page: 35,
				},
			});
			if (response.status !== 200) {
				self.loading = false;
				self.error = "Error occured";
			}

			self.images = response && response.data;
			self.loading = false;
		})();
	},
};
</script>

<template>
	<div class="p-4 lg:pb-0 md:w-8/12 lg:w-[70%] xl:w-[80%] flex items-center justify-center">
		<div class="flex items-center gap-x-2 text-slate-300 justify-center" v-if="loading || images.length <= 0">
			<span class="border-2 rounded-full border-r-secondary-clr/10 animate-spin border-secondary-clr w-5 h-5 block"></span>
			<span class="flex leading-none text-sm tracking-wide">Loading...</span>
		</div>
		<div v-else class="w-full block h-full max-h-[625px]">
			<div v-if="search.searchTerm" class="mb-6 md:mt-2">
				<h2 class="text-slate-300 tracking-wider">Search Results for "{{ search.searchTerm.trim() }}"</h2>
			</div>
			<div class="h-full overflow-y-scroll w-full block">
				<ul class="columns-2 sm:columns-3 xl:columns-5">
					<li v-for="image in images" :key="image.id" class="mb-4">
						<div v-if="image" class="relative rounded-md overflow-hidden border border-slate-500/20">
							<picture>
								<source media="(min-width: 991px)" :srcset="image.urls.small_s3" sizes="" />
								<source media="(min-width: 640px)" :srcset="image.urls.thumb" sizes="" />
								<img :src="image.urls.small_s3" :alt="image.alt_description ?? image.slug ?? 'alt image'" class="w-full h-full object-cover" />
							</picture>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
