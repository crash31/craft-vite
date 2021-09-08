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
					overflow-hidden
					z-[70]
					bg-gray-800 bg-opacity-80
				"
			></div>
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
