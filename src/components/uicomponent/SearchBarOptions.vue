<script>
import { Icon } from "@iconify/vue";
export default {
	name: "SearchBar-and-Options",
	props: ["searchTerm", "tabOfOptions"],
	emits: ["selectTab", "update:searchTerm"],
	components: {
		Icon,
	},
	methods: {
		clearSearchInput: function () {
			const input = this.$refs.searchInputRef;
			input.value = "".trim();
			input.focus();
		},
	},
};
</script>

<template>
	<aside class="relative border-r border-r-border-clr bg-transparent p-4 md:w-4/12 lg:w-[30%] xl:w-[20%]">
		<div class="h-9 flex items-stretch">
			<div class="[&_input:hover]:hover:bg-zinc-700/10 transition-[background-color] relative duration-200 overflow-hidden flex-grow">
				<input
					type="search"
					name="image-search"
					:value="searchTerm"
					@input="$emit('update:searchTerm', $event.target.value)"
					ref="searchInputRef"
					autocomplete="off"
					spellcheck="false"
					class="border tracking-wider v-form-control text-xs h-full w-full rounded-r-none border-r-0 bg-transparent outline-none text-slate-200 rounded-[5px] py-1 px-4 border-slate-700 focus:border-slate-600 transition-all duration-200" />
				<button
					@click="clearSearchInput"
					class="bg-transparent absolute right-0 bottom-0 top-0 hover:bg-zinc-700/20 text-slate-200 h-9 w-9 flex items-center justify-center border border-transparent">
					<Icon icon="iconamoon:close-duotone" class="w-5 h-5" />
				</button>
			</div>
			<button
				type="button"
				class="bg-transparent rounded-[5px] rounded-l-none hover:bg-zinc-700/10 text-slate-200 h-9 w-9 flex items-center justify-center border border-slate-700">
				<Icon icon="iconamoon:search-duotone" class="w-4 h-4" />
			</button>
		</div>
		<div class="">
			<ul class="flex items-center overflow-auto py-3 md:flex-wrap gap-y-2 gap-x-1 mt-8">
				<li v-for="tab in tabOfOptions" :key="tab.term">
					<button
						@click="$emit('selectTab', tab.term)"
						:class="[
							'text-[.82rem] transition-[background-color,border] duration-300 text-white/80 rounded-[100px] px-5 py-[5px] tracking-wide border flex items-center leading-none h-9 v-pill',
							`${
								tab.isActive
									? 'bg-secondary-clr/20 border-secondary-clr hover:bg-secondary-clr/40'
									: 'bg-transparent hover:border-zinc-100/20 border-border-clr'
							}`,
						]">
						{{ tab.term }}
					</button>
				</li>
			</ul>
		</div>
	</aside>
</template>

<style scoped>
.v-pill {
	font-family: var(--font-family-light);
}
.v-form-control[type="search"]::-ms-clear {
	display: none;
	width: 0;
	height: 0;
}
.v-form-control[type="search"]::-ms-reveal {
	display: none;
	width: 0;
	height: 0;
}
.v-form-control[type="search"]::-webkit-search-decoration,
.v-form-control[type="search"]::-webkit-search-cancel-button,
.v-form-control[type="search"]::-webkit-search-results-button,
.v-form-control[type="search"]::-webkit-search-results-decoration {
	display: none;
}
</style>
