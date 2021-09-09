<template>
	<span
		ref="trigger"
		class="tooltip"
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
				`${this.message.length}ch`
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
		position: absolute;
		max-width: 200px;
		width: var(--tooltip-width);
		border-radius: theme("borderRadius.DEFAULT");
		background-color: theme("colors.gray.500");
		color: theme("colors.white");
		padding: theme("spacing.1") theme("spacing.2");
		font-size: theme("fontSize.sm");
		line-height: 1.05;
		text-align: center;
		opacity: 0;
		transition: all 200ms;
	}

	.tooltip:hover::after {
		opacity: 1;
	}

	.tooltip.top::after {
		bottom: calc(100% + theme("spacing.1"));
		left: 50%;
		transform: translateX(-50%);
	}
	.tooltip.bottom::after {
		top: calc(100% + theme("spacing.1"));
		left: 50%;
		transform: translateX(-50%);
	}
	.tooltip.left::after {
		top: 50%;
		right: calc(100% + theme("spacing.2"));
		transform: translateY(-50%);
	}
	.tooltip.right::after {
		top: 50%;
		left: calc(100% + theme("spacing.2"));
		transform: translateY(-50%);
	}
</style>
