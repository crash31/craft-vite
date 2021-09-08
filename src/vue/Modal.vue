<template>
	<!-- Trigger Wrap -->
	<button
		:aria-label="buttonLabel.length > 0 ? buttonLabel : 'Show modal'"
		:class="buttonClass.length > 0 ? buttonClass : ''"
		@click="openModal"
	>
		<slot name="trigger">Open Modal</slot>
	</button>
	<!-- Modal Template -->
	<teleport to="body">
		<transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
			<div
				v-if="showModal"
				class="
					modal-wrap
					fixed
					inset-0
					flex
					items-center
					justify-center
					overflow-hidden
					bg-blur
					z-[70]
					bg-gray-800 bg-opacity-80
				"
			>
				<div class="relative w-full max-h-full overflow-y-scroll p-4">
					<div
						class="
							relative
							shadow-2xl
							p-4
							lg:p-8
							rounded-lg
							bg-white
							w-full
							max-w-5xl
							mx-auto
						"
						v-click-away="closeModal"
					>
						<div class="relative">
							<slot name="content">
								<div class="prose">
									<h2>Default Modal</h2>
									<p class="lead">Enter content here...</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Rhoncus mattis rhoncus urna neque viverra. Sem
										integer vitae justo eget magna fermentum iaculis. Posuere
										urna nec tincidunt praesent semper feugiat nibh. Tellus at
										urna condimentum mattis pellentesque id nibh tortor. Viverra
										adipiscing at in tellus integer feugiat scelerisque varius.
										Donec massa sapien faucibus et molestie ac feugiat. Massa
										vitae tortor condimentum lacinia quis vel eros. Volutpat
										lacus laoreet non curabitur gravida.
									</p>
								</div>
							</slot>
						</div>
						<button
							aria-label="Close Modal"
							class="
								absolute
								top-0
								right-0
								p-1
								m-1
								rounded-full
								w-8
								h-8
								bg-white
								hover:bg-gray-100
								duration-200
								flex
								items-center
								justify-center
							"
							@click="closeModal"
						>
							<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M17.25 6.75L6.75 17.25"
								></path>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M6.75 6.75L17.25 17.25"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script>
	import gsap from "gsap";
	export default {
		props: {
			buttonClass: {
				type: String,
				default: "",
			},
			buttonLabel: {
				type: String,
				default: "",
			},
		},
		data() {
			return {
				showModal: false,
			};
		},
		methods: {
			openModal() {
				this.showModal = true;
			},
			closeModal() {
				this.showModal = false;
			},
			beforeEnter(el) {
				gsap.set(el, {
					opacity: 0,
					scale: 1.2,
				});
			},
			enter(el, done) {
				gsap.to(el, {
					duration: 0.4,
					opacity: 1,
					scale: 1,
					ease: "strong.inOut",
					onComplete: done,
				});
			},
			leave(el, done) {
				gsap.to(el, {
					duration: 0.4,
					opacity: 0,
					scale: 1.2,
					ease: "strong.inOut",
					onComplete: done,
				});
			},
		},
	};
</script>

<style>
	.bg-blur {
		backdrop-filter: blur(8px);
	}
</style>
