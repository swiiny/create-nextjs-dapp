# Styled Components Template

This template is based on the [Styled Components](https://styled-components.com/) library.

## Quick Start

You can quickly start a new project with this template by running:

```bash
npx create-nextjs-dapp styled-components
```

---

## Default Components and Integrated Functions

The following documentation is about already integrated functions and default components in the styled-components template. You can delete them without any worries if you don't need them.

## Usage with margin & padding

The Text component also provides options to set margin and padding on different screen sizes using props like `smMargin`, `mdPadding`, `xlMarginTop`, etc. Here's an example:

```tsx
import Text from '@components/default/Text';

const ExampleComponent = () => {
	return (
		<>
			{/*
			 * Sets a margin of 24px on all sides on screens
			 * larger than or equal to EMediaQuery.sm
			 */}
			<Text smMargin={'24px'}></Text>

			{/*
			 * Sets a padding of 12px on all sides on all
			 * screen sizes, and a margin of 24px on top on
			 * screens larger than or equal to EMediaQuery.xl
			 * */}
			<Text padding={'12px'} xlMarginTop={'24px'}></Text>

			{/*
			 * Sets a padding of 12px on top on all screen
			 * sizes, and a margin of 24px on top on screens
			 * larger than or equal to EMediaQuery.md
			 * */}
			<Text paddingTop={'12px'} mdMarginTop={'24px'}></Text>
		</>
	);
};
```

## Usage with Responsive Styles

You can use the `hiddenRange` and `hiddenRanges` props to hide content on different screen sizes. The `hiddenRange` prop takes an array with two values, the first being the minimum screen size at which the content should be hidden and the second being the maximum screen size at which the content should be hidden. The `hiddenRanges` prop takes an array of `hiddenRange` arrays, allowing you to specify multiple ranges for which the content should be hidden.

Here's an example:

```tsx
import Text from '@components/default/Text';

const ExampleComponent = () => {
	return (
		<>
			{/* Hides the text on screens smaller than 600px */}
			<Text hiddenRange={['600px', undefined]}>Hidden on screens smaller than 600px</Text>

			{/* Hides the text on screens larger than 900px */}
			<Text hiddenRange={[undefined, '900px']}>Hidden on screen larger than 900px</Text>

			{/* Hides the text on screens between 600px and 1200px */}
			<Text hiddenRange={['600px', '1200px']}>Hidden between 600px and 900px screens</Text>

			{/* Hides the text on screens smaller than 600px and larger than 1536px */}
			<Text
				hiddenRanges={[
					['600px', undefined],
					[undefined, '1536px']
				]}
			>
				Hidden on small and extra-large screens
			</Text>
		</>
	);
};
```
