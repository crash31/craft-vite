<template>
	<div class="accordion-wrap" v-click-away="away">
		<!-- Accordion Loop -->
		<div
			class="accordion-item"
			:class="
				index != formattedList.length - 1 ? 'border-b border-gray-300' : ''
			"
			v-for="(item, index) in formattedList"
			:key="`accordion-${index}`"
		>
			<!-- Accordion Trigger / Headline -->
			<button
				aria-label="Open Accordion Item"
				class="
					accordion-trigger
					flex
					items-center
					justify-start
					focus:outline-none
					py-2
					w-full
				"
				@click="toggleItem(index)"
			>
				<span class="icon-wrap inline-block mr-3 flex-shrink-0 pt-1">
					<span
						class="
							inline-flex
							w-6
							h-6
							items-center
							justify-center
							transform
							duration-200
						"
						:class="isOpen == index ? 'rotate-90' : 'rotate-0'"
					>
						<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M10.75 8.75L14.25 12L10.75 15.25"
							></path>
						</svg>
					</span>
				</span>
				<span
					class="w-full inline-block text-lg lg:text-2xl text-left leading-none"
					>{{ item.headline }}</span
				>
			</button>

			<!-- Accordion Content Dropdown -->
			<div class="accordion-content-wrap relative overflow-hidden">
				<div
					:class="`pseudo-block-${index}`"
					class="relative duration-200"
					style="height: 0px"
				></div>
				<transition
					name="accordion-transition"
					@enter="enter(index)"
					@leave="leave(index)"
					enter-from-class="opacity-0"
					enter-active-class="transition ease-out duration-200"
					enter-to-class="opacity-100"
					leave-from-class="opacity-100"
					leave-active-class="transition ease-out duration-200"
					leave-to-class="opacity-0"
				>
					<div
						class="absolute top-0 inset-x-0 flex"
						:class="`accordion-content-${index}`"
						v-show="isOpen == index"
					>
						<div class="w-6 mr-3 flex-shrink-0"></div>
						<div class="prose py-4 lg:py-8">
							<span v-html="item.content"></span>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Accordion",
		props: {
			list: {
				type: Array,
				default: () => [],
			},
		},
		computed: {
			formattedList() {
				return this.list.map((item, index) => {
					return {
						headline: Object.values(item)[0],
						content: Object.values(item)[1],
					};
				});
			},
		},
		data() {
			return {
				isOpen: null,
			};
		},
		methods: {
			toggleItem(index) {
				if (this.isOpen == index) {
					this.isOpen = null;
				} else {
					this.isOpen = index;
				}
			},
			enter(index) {
				const pseudoNode = document.querySelector(`.pseudo-block-${index}`);
				const contentNode = document.querySelector(
					`.accordion-content-${index}`
				);
				const contentHeight = contentNode.offsetHeight;
				pseudoNode.style.height = `${contentHeight}px`;
			},
			leave(index) {
				const pseudoNode = document.querySelector(`.pseudo-block-${index}`);
				pseudoNode.style.height = "0px";
			},
			away() {
				if (this.isOpen != null) {
					this.isOpen = null;
				}
			},
		},
	};
</script>
