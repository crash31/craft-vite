<template>
	<span
		ref="trigger"
		class="tooltip after:bg-gray-600 after:bg-opacity-80"
		:class="`${
			position == 'top' ||
			position == 'right' ||
			position == 'bottom' ||
			position == 'left'
				? position
				: ''
		}`"
	>
		<slot></slot>
	</span>
</template>

<script>
	export default {
		props: {
			message: {
				type: String,
				default: "",
			},
			position: {
				type: String,
				default: "top",
			},
		},
		data() {
			return {
				show: false,
			};
		},
		mounted() {
			this.$refs.trigger.style.setProperty(
				"--tooltip-message",
				`"${this.message}"`
			);
			this.$refs.trigger.style.setProperty(
				"--tooltip-width",
				`${this.message.length - 4}ch`
			);
		},
		methods: {
			showTooltip() {
				this.show = true;
				console.log("show");
			},
			hideTooltip() {
				this.show = false;
				console.log("hide");
			},
		},
	};
</script>

<style scoped>
	.tooltip {
		position: relative;
	}

	.tooltip::after {
		content: var(--tooltip-message);
		pointer-events: none;
		position: absolute;
		max-width: 300px;
		width: var(--tooltip-width);
		border-radius: theme("borderRadius.DEFAULT");
		color: theme("colors.white");
		padding: theme("spacing.2") theme("spacing.3");
		font-size: theme("fontSize.sm");
		line-height: 1.1;
		backdrop-filter: blur(2px);
		opacity: 0;
		transition: all 200ms;
		z-index: theme("zIndex.30");
	}

	.tooltip:hover::after {
		opacity: 1;
		margin: 0 !important;
	}

	.tooltip.top::after {
		bottom: calc(100% + theme("spacing.1"));
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: -5px;
	}
	.tooltip.bottom::after {
		top: calc(100% + theme("spacing.1"));
		left: 50%;
		transform: translateX(-50%);
		margin-top: -5px;
	}
	.tooltip.left::after {
		top: 50%;
		right: calc(100% + theme("spacing.1"));
		transform: translateY(-50%);
		margin-right: -5px;
	}
	.tooltip.right::after {
		top: 50%;
		left: calc(100% + theme("spacing.1"));
		transform: translateY(-50%);
		margin-left: -5px;
	}
</style>
