<script>
import ImageEditOptionsSidebar from "../editorLayoutViews/ImageEditOptionsSidebar.vue";

export default {
	name: "EditorPage",
	components: {
		ImageEditOptionsSidebar,
	},
};
</script>

<template>
	<div class="flex-grow bg-primary-clr flex items-stretch">
		<aside class="h-full">
			<ImageEditOptionsSidebar />
		</aside>
		<section>lorem</section>
	</div>
</template>
