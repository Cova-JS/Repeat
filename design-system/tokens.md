# Token catalog

All `--ds-*` CSS custom properties exported by this design system.
Import `tokens.css` once at your app root — then reference any token as
`var(--ds-<name>)` in inline styles or CSS.

## Token families

| Family prefix | Semantic meaning |
|--------------|-----------------|
| `color.*` | — |
| `grid.*` | Breakpoints, gutters, margins and column counts. |
| `icon.*` | Fill colour for SVG glyphs and icon sprites. |
| `sizes.*` | Primitive size scale (dimensions, icon sizes). |
| `radius.*` | Corner radius tokens for containers and controls. |
| `shadow.*` | Box-shadow elevation levels. |
| `zIndex.*` | Stacking order levels. |
| `opacity.*` | Named opacity levels. |
| `spacing.*` | Margin, padding and gap values from the spacing scale. |
| `typography.*` | Font family, size, weight, line-height and letter-spacing. |
| `semanticColors.*` | — |

## color


| CSS variable | Value |
|-------------|-------|
| `--ds-color-colors-red-50` | `#fef2f2` |
| `--ds-color-colors-red-100` | `#fee2e2` |
| `--ds-color-colors-red-200` | `#fecaca` |
| `--ds-color-colors-red-300` | `#fca5a5` |
| `--ds-color-colors-red-400` | `#f87171` |
| `--ds-color-colors-red-500` | `#ef4444` |
| `--ds-color-colors-red-600` | `#dc2626` |
| `--ds-color-colors-red-700` | `#b91c1c` |
| `--ds-color-colors-red-800` | `#991b1b` |
| `--ds-color-colors-red-900` | `#7f1d1d` |
| `--ds-color-colors-red-950` | `#450a0a` |
| `--ds-color-colors-blue-50` | `#eff6ff` |
| `--ds-color-colors-blue-100` | `#dbeafe` |
| `--ds-color-colors-blue-200` | `#bfdbfe` |
| `--ds-color-colors-blue-300` | `#93c5fd` |
| `--ds-color-colors-blue-400` | `#60a5fa` |
| `--ds-color-colors-blue-500` | `#3b82f6` |
| `--ds-color-colors-blue-600` | `#2563eb` |
| `--ds-color-colors-blue-700` | `#1d4ed8` |
| `--ds-color-colors-blue-800` | `#1e40af` |
| `--ds-color-colors-blue-900` | `#1e3a8a` |
| `--ds-color-colors-blue-950` | `#172554` |
| `--ds-color-colors-gray-50` | `#f9fafb` |
| `--ds-color-colors-gray-100` | `#f3f4f6` |
| `--ds-color-colors-gray-200` | `#e5e7eb` |
| `--ds-color-colors-gray-300` | `#d1d5db` |
| `--ds-color-colors-gray-400` | `#9ca3af` |
| `--ds-color-colors-gray-500` | `#6b7280` |
| `--ds-color-colors-gray-600` | `#4b5563` |
| `--ds-color-colors-gray-700` | `#374151` |
| `--ds-color-colors-gray-800` | `#1f2937` |
| `--ds-color-colors-gray-900` | `#111827` |
| `--ds-color-colors-gray-950` | `#030712` |
| `--ds-color-colors-pink-50` | `#fdf2f8` |
| `--ds-color-colors-pink-100` | `#fce7f3` |
| `--ds-color-colors-pink-200` | `#fbcfe8` |
| `--ds-color-colors-pink-300` | `#f9a8d4` |
| `--ds-color-colors-pink-400` | `#f472b6` |
| `--ds-color-colors-pink-500` | `#ec4899` |
| `--ds-color-colors-pink-600` | `#db2777` |
| `--ds-color-colors-pink-700` | `#be185d` |
| `--ds-color-colors-pink-800` | `#9d174d` |
| `--ds-color-colors-pink-900` | `#831843` |
| `--ds-color-colors-pink-950` | `#500724` |
| `--ds-color-colors-teal-50` | `#f0fdfa` |
| `--ds-color-colors-teal-100` | `#ccfbf1` |
| `--ds-color-colors-teal-200` | `#99f6e4` |
| `--ds-color-colors-teal-300` | `#5eead4` |
| `--ds-color-colors-teal-400` | `#2dd4bf` |
| `--ds-color-colors-teal-500` | `#14b8a6` |
| `--ds-color-colors-teal-600` | `#0d9488` |
| `--ds-color-colors-teal-700` | `#0f766e` |
| `--ds-color-colors-teal-800` | `#115e59` |
| `--ds-color-colors-teal-900` | `#134e4a` |
| `--ds-color-colors-teal-950` | `#042f2e` |
| `--ds-color-colors-green-50` | `#f0fdf4` |
| `--ds-color-colors-green-100` | `#dcfce7` |
| `--ds-color-colors-green-200` | `#bbf7d0` |
| `--ds-color-colors-green-300` | `#86efac` |
| `--ds-color-colors-green-400` | `#4ade80` |
| `--ds-color-colors-green-500` | `#22c55e` |
| `--ds-color-colors-green-600` | `#16a34a` |
| `--ds-color-colors-green-700` | `#15803d` |
| `--ds-color-colors-green-800` | `#166534` |
| `--ds-color-colors-green-900` | `#14532d` |
| `--ds-color-colors-green-950` | `#052e16` |
| `--ds-color-colors-indigo-50` | `#eef2ff` |
| `--ds-color-colors-indigo-100` | `#e0e7ff` |
| `--ds-color-colors-indigo-200` | `#c7d2fe` |
| `--ds-color-colors-indigo-300` | `#a5b4fc` |
| `--ds-color-colors-indigo-400` | `#818cf8` |
| `--ds-color-colors-indigo-500` | `#6366f1` |
| `--ds-color-colors-indigo-600` | `#4f46e5` |
| `--ds-color-colors-indigo-700` | `#4338ca` |
| `--ds-color-colors-indigo-800` | `#3730a3` |
| `--ds-color-colors-indigo-900` | `#312e81` |
| `--ds-color-colors-indigo-950` | `#1e1b4b` |
| `--ds-color-colors-orange-50` | `#fff7ed` |
| `--ds-color-colors-orange-100` | `#ffedd5` |
| `--ds-color-colors-orange-200` | `#fed7aa` |
| `--ds-color-colors-orange-300` | `#fdba74` |
| `--ds-color-colors-orange-400` | `#fb923c` |
| `--ds-color-colors-orange-500` | `#f97316` |
| `--ds-color-colors-orange-600` | `#ea580c` |
| `--ds-color-colors-orange-700` | `#c2410c` |
| `--ds-color-colors-orange-800` | `#9a3412` |
| `--ds-color-colors-orange-900` | `#7c2d12` |
| `--ds-color-colors-orange-950` | `#431407` |
| `--ds-color-colors-purple-50` | `#faf5ff` |
| `--ds-color-colors-purple-100` | `#f3e8ff` |
| `--ds-color-colors-purple-200` | `#e9d5ff` |
| `--ds-color-colors-purple-300` | `#d8b4fe` |
| `--ds-color-colors-purple-400` | `#c084fc` |
| `--ds-color-colors-purple-500` | `#a855f7` |
| `--ds-color-colors-purple-600` | `#9333ea` |
| `--ds-color-colors-purple-700` | `#7e22ce` |
| `--ds-color-colors-purple-800` | `#6b21a8` |
| `--ds-color-colors-purple-900` | `#581c87` |
| `--ds-color-colors-purple-950` | `#3b0764` |
| `--ds-color-colors-yellow-50` | `#fefce8` |
| `--ds-color-colors-yellow-100` | `#fef9c3` |
| `--ds-color-colors-yellow-200` | `#fef08a` |
| `--ds-color-colors-yellow-300` | `#fde047` |
| `--ds-color-colors-yellow-400` | `#facc15` |
| `--ds-color-colors-yellow-500` | `#eab308` |
| `--ds-color-colors-yellow-600` | `#ca8a04` |
| `--ds-color-colors-yellow-700` | `#a16207` |
| `--ds-color-colors-yellow-800` | `#854d0e` |
| `--ds-color-colors-yellow-900` | `#713f12` |
| `--ds-color-colors-yellow-950` | `#422006` |
| `--ds-color-colors-neutral-50` | `#fafafa` |
| `--ds-color-colors-neutral-100` | `#f5f5f5` |
| `--ds-color-colors-neutral-200` | `#e5e5e5` |
| `--ds-color-colors-neutral-300` | `#d4d4d4` |
| `--ds-color-colors-neutral-400` | `#a3a3a3` |
| `--ds-color-colors-neutral-500` | `#737373` |
| `--ds-color-colors-neutral-600` | `#525252` |
| `--ds-color-colors-neutral-700` | `#404040` |
| `--ds-color-colors-neutral-800` | `#262626` |
| `--ds-color-colors-neutral-900` | `#171717` |
| `--ds-color-colors-neutral-950` | `#0a0a0a` |
| `--ds-color-semanticColors-border-50` | `#808080` |
| `--ds-color-semanticColors-border-100` | `#808080` |
| `--ds-color-semanticColors-border-200` | `#808080` |
| `--ds-color-semanticColors-border-300` | `#808080` |
| `--ds-color-semanticColors-border-400` | `#808080` |
| `--ds-color-semanticColors-border-500` | `#808080` |
| `--ds-color-semanticColors-border-600` | `#808080` |
| `--ds-color-semanticColors-border-700` | `#808080` |
| `--ds-color-semanticColors-border-800` | `#808080` |
| `--ds-color-semanticColors-border-900` | `#808080` |
| `--ds-color-semanticColors-border-950` | `#808080` |
| `--ds-color-semanticColors-surface-50` | `#808080` |
| `--ds-color-semanticColors-surface-100` | `#808080` |
| `--ds-color-semanticColors-surface-200` | `#808080` |
| `--ds-color-semanticColors-surface-300` | `#808080` |
| `--ds-color-semanticColors-surface-400` | `#808080` |
| `--ds-color-semanticColors-surface-500` | `#808080` |
| `--ds-color-semanticColors-surface-600` | `#808080` |
| `--ds-color-semanticColors-surface-700` | `#808080` |
| `--ds-color-semanticColors-surface-800` | `#808080` |
| `--ds-color-semanticColors-surface-900` | `#808080` |
| `--ds-color-semanticColors-surface-950` | `#808080` |

## Grid

_Breakpoints, gutters, margins and column counts._

| CSS variable | Value |
|-------------|-------|
| `--ds-grid-gutter-lg` | `var(--ds-sizes-scale-2xl)` |
| `--ds-grid-gutter-md` | `var(--ds-sizes-scale-xl)` |
| `--ds-grid-gutter-sm` | `var(--ds-sizes-scale-lg)` |
| `--ds-grid-gutter-xl` | `var(--ds-sizes-scale-2xl)` |
| `--ds-grid-margin-lg` | `var(--ds-sizes-scale-3xl)` |
| `--ds-grid-margin-md` | `var(--ds-sizes-scale-3xl)` |
| `--ds-grid-margin-sm` | `var(--ds-sizes-scale-lg)` |
| `--ds-grid-margin-xl` | `var(--ds-sizes-scale-4xl)` |
| `--ds-grid-columns-lg` | `12` |
| `--ds-grid-columns-md` | `8` |
| `--ds-grid-columns-sm` | `4` |
| `--ds-grid-columns-xl` | `12` |
| `--ds-grid-breakpoints-lg` | `1024px` |
| `--ds-grid-breakpoints-md` | `768px` |
| `--ds-grid-breakpoints-sm` | `640px` |
| `--ds-grid-breakpoints-xl` | `1280px` |

## Icon (glyph colour)

_Fill colour for SVG glyphs and icon sprites._

| CSS variable | Value |
|-------------|-------|
| `--ds-icon-lg` | `var(--ds-sizes-scale-3xl)` |
| `--ds-icon-md` | `var(--ds-sizes-scale-2xl)` |
| `--ds-icon-sm` | `var(--ds-sizes-scale-xl)` |

## Sizes

_Primitive size scale (dimensions, icon sizes)._

| CSS variable | Value |
|-------------|-------|
| `--ds-sizes-scale-lg` | `12px` |
| `--ds-sizes-scale-md` | `10px` |
| `--ds-sizes-scale-sm` | `8px` |
| `--ds-sizes-scale-xl` | `16px` |
| `--ds-sizes-scale-xs` | `6px` |
| `--ds-sizes-scale-2xl` | `20px` |
| `--ds-sizes-scale-2xs` | `4px` |
| `--ds-sizes-scale-3xl` | `24px` |
| `--ds-sizes-scale-3xs` | `3px` |
| `--ds-sizes-scale-4xl` | `32px` |
| `--ds-sizes-scale-4xs` | `2px` |
| `--ds-sizes-scale-5xl` | `48px` |
| `--ds-sizes-scale-5xs` | `1px` |
| `--ds-sizes-scale-6xl` | `64px` |
| `--ds-sizes-scale-7xl` | `80px` |
| `--ds-sizes-scale-8xl` | `96px` |
| `--ds-sizes-scale-9xl` | `128px` |
| `--ds-sizes-scale-10xl` | `160px` |
| `--ds-sizes-scale-11xl` | `192px` |
| `--ds-sizes-scale-12xl` | `256px` |
| `--ds-sizes-scale-13xl` | `320px` |
| `--ds-sizes-scale-14xl` | `384px` |
| `--ds-sizes-scale-15xl` | `448px` |
| `--ds-sizes-scale-none` | `0px` |

## Border radius

_Corner radius tokens for containers and controls._

| CSS variable | Value |
|-------------|-------|
| `--ds-radius-lg` | `12px` |
| `--ds-radius-md` | `8px` |
| `--ds-radius-sm` | `6px` |
| `--ds-radius-xl` | `16px` |
| `--ds-radius-xs` | `4px` |
| `--ds-radius-2xl` | `24px` |
| `--ds-radius-3xl` | `32px` |
| `--ds-radius-full` | `9999px` |
| `--ds-radius-none` | `0px` |

## Shadow

_Box-shadow elevation levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-shadow-color` | `var(--ds-color-colors-neutral-950)` |
| `--ds-shadow-levels-lg` | `0px var(--ds-sizes-scale-sm) var(--ds-sizes-scale-xl) 0px rgb(10 10 10 / 0.08), 0px var(--ds-sizes-scale-xs) var(--ds-sizes-scale-sm) 0px rgb(10 10 10 / 0.04)` |
| `--ds-shadow-levels-md` | `0px var(--ds-sizes-scale-xs) var(--ds-sizes-scale-sm) 0px rgb(10 10 10 / 0.08), 0px var(--ds-sizes-scale-2xs) var(--ds-sizes-scale-xs) 0px rgb(10 10 10 / 0.04)` |
| `--ds-shadow-levels-sm` | `0px var(--ds-sizes-scale-3xs) var(--ds-sizes-scale-2xs) 0px rgb(10 10 10 / 0.08), 0px var(--ds-sizes-scale-3xs) var(--ds-sizes-scale-3xs) 0px rgb(10 10 10 / 0.04)` |
| `--ds-shadow-levels-xl` | `0px var(--ds-sizes-scale-lg) var(--ds-sizes-scale-3xl) 0px rgb(10 10 10 / 0.08), 0px var(--ds-sizes-scale-sm) var(--ds-sizes-scale-lg) 0px rgb(10 10 10 / 0.04)` |
| `--ds-shadow-levels-xs` | `0px var(--ds-sizes-scale-3xs) var(--ds-sizes-scale-3xs) 0px rgb(10 10 10 / 0.04)` |
| `--ds-shadow-levels-2xl` | `0px var(--ds-sizes-scale-xl) var(--ds-sizes-scale-4xl) 0px rgb(10 10 10 / 0.16), 0px var(--ds-sizes-scale-lg) var(--ds-sizes-scale-xl) 0px rgb(10 10 10 / 0.08)` |

## Z-index

_Stacking order levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-zIndex-10` | `10` |
| `--ds-zIndex-20` | `20` |
| `--ds-zIndex-30` | `30` |
| `--ds-zIndex-40` | `40` |
| `--ds-zIndex-50` | `50` |
| `--ds-zIndex-9999` | `9999` |

## Opacity

_Named opacity levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-opacity-0` | `0` |
| `--ds-opacity-4` | `0.03999999910593033` |
| `--ds-opacity-8` | `0.07999999821186066` |
| `--ds-opacity-16` | `0.1599999964237213` |
| `--ds-opacity-32` | `0.3199999928474426` |
| `--ds-opacity-48` | `0.47999998927116394` |
| `--ds-opacity-64` | `0.6399999856948853` |
| `--ds-opacity-80` | `0.800000011920929` |
| `--ds-opacity-100` | `1` |

## Spacing

_Margin, padding and gap values from the spacing scale._

| CSS variable | Value |
|-------------|-------|
| `--ds-spacing-lg` | `var(--ds-sizes-scale-xl)` |
| `--ds-spacing-md` | `var(--ds-sizes-scale-lg)` |
| `--ds-spacing-sm` | `var(--ds-sizes-scale-sm)` |
| `--ds-spacing-xl` | `var(--ds-sizes-scale-3xl)` |
| `--ds-spacing-xs` | `var(--ds-sizes-scale-xs)` |
| `--ds-spacing-2xl` | `var(--ds-sizes-scale-4xl)` |
| `--ds-spacing-2xs` | `var(--ds-sizes-scale-2xs)` |
| `--ds-spacing-3xl` | `var(--ds-sizes-scale-5xl)` |

## Typography

_Font family, size, weight, line-height and letter-spacing._

| CSS variable | Value |
|-------------|-------|
| `--ds-typography-base` | `16px` |
| `--ds-typography-roles-body-steps-md-fontSize` | `var(--ds-typography-scale-fontSize-350)` |
| `--ds-typography-roles-body-steps-md-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-body-steps-md-lineHeight` | `var(--ds-typography-scale-lineHeight-400)` |
| `--ds-typography-roles-body-steps-md-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-body-steps-sm-fontSize` | `var(--ds-typography-scale-fontSize-300)` |
| `--ds-typography-roles-body-steps-sm-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-body-steps-sm-lineHeight` | `var(--ds-typography-scale-lineHeight-300)` |
| `--ds-typography-roles-body-steps-sm-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-body-steps-xs-fontSize` | `var(--ds-typography-scale-fontSize-250)` |
| `--ds-typography-roles-body-steps-xs-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-body-steps-xs-lineHeight` | `var(--ds-typography-scale-lineHeight-250)` |
| `--ds-typography-roles-body-steps-xs-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-body-steps-md-semibold-fontSize` | `var(--ds-typography-scale-fontSize-350)` |
| `--ds-typography-roles-body-steps-md-semibold-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-body-steps-md-semibold-lineHeight` | `var(--ds-typography-scale-lineHeight-400)` |
| `--ds-typography-roles-body-steps-md-semibold-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-body-steps-sm-semibold-fontSize` | `var(--ds-typography-scale-fontSize-300)` |
| `--ds-typography-roles-body-steps-sm-semibold-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-body-steps-sm-semibold-lineHeight` | `var(--ds-typography-scale-lineHeight-300)` |
| `--ds-typography-roles-body-steps-sm-semibold-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-body-steps-xs-semibold-fontSize` | `var(--ds-typography-scale-fontSize-250)` |
| `--ds-typography-roles-body-steps-xs-semibold-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-body-steps-xs-semibold-lineHeight` | `var(--ds-typography-scale-lineHeight-250)` |
| `--ds-typography-roles-body-steps-xs-semibold-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-body-family` | `var(--ds-typography-families-sans)` |
| `--ds-typography-roles-caption-steps-md-fontSize` | `var(--ds-typography-scale-fontSize-200)` |
| `--ds-typography-roles-caption-steps-md-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-caption-steps-md-lineHeight` | `var(--ds-typography-scale-lineHeight-b180)` |
| `--ds-typography-roles-caption-steps-md-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-caption-steps-sm-fontSize` | `var(--ds-typography-scale-fontSize-b120)` |
| `--ds-typography-roles-caption-steps-sm-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-caption-steps-sm-lineHeight` | `var(--ds-typography-scale-lineHeight-b160)` |
| `--ds-typography-roles-caption-steps-sm-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-caption-steps-xs-fontSize` | `var(--ds-typography-scale-fontSize-b110)` |
| `--ds-typography-roles-caption-steps-xs-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-caption-steps-xs-lineHeight` | `var(--ds-typography-scale-lineHeight-b160)` |
| `--ds-typography-roles-caption-steps-xs-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-caption-family` | `var(--ds-typography-families-sans)` |
| `--ds-typography-roles-headings-steps-h1-fontSize` | `var(--ds-typography-scale-fontSize-800)` |
| `--ds-typography-roles-headings-steps-h1-fontWeight` | `var(--ds-typography-weights-bold)` |
| `--ds-typography-roles-headings-steps-h1-lineHeight` | `var(--ds-typography-scale-lineHeight-800)` |
| `--ds-typography-roles-headings-steps-h1-letterSpacing` | `var(--ds-typography-scale-letterSpacing-800)` |
| `--ds-typography-roles-headings-steps-h2-fontSize` | `var(--ds-typography-scale-fontSize-700)` |
| `--ds-typography-roles-headings-steps-h2-fontWeight` | `var(--ds-typography-weights-bold)` |
| `--ds-typography-roles-headings-steps-h2-lineHeight` | `var(--ds-typography-scale-lineHeight-700)` |
| `--ds-typography-roles-headings-steps-h2-letterSpacing` | `var(--ds-typography-scale-letterSpacing-700)` |
| `--ds-typography-roles-headings-steps-h3-fontSize` | `var(--ds-typography-scale-fontSize-600)` |
| `--ds-typography-roles-headings-steps-h3-fontWeight` | `var(--ds-typography-weights-bold)` |
| `--ds-typography-roles-headings-steps-h3-lineHeight` | `var(--ds-typography-scale-lineHeight-600)` |
| `--ds-typography-roles-headings-steps-h3-letterSpacing` | `var(--ds-typography-scale-letterSpacing-600)` |
| `--ds-typography-roles-headings-steps-h4-fontSize` | `var(--ds-typography-scale-fontSize-500)` |
| `--ds-typography-roles-headings-steps-h4-fontWeight` | `var(--ds-typography-weights-bold)` |
| `--ds-typography-roles-headings-steps-h4-lineHeight` | `var(--ds-typography-scale-lineHeight-500)` |
| `--ds-typography-roles-headings-steps-h4-letterSpacing` | `var(--ds-typography-scale-letterSpacing-500)` |
| `--ds-typography-roles-headings-steps-h5-fontSize` | `var(--ds-typography-scale-fontSize-400)` |
| `--ds-typography-roles-headings-steps-h5-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-headings-steps-h5-lineHeight` | `var(--ds-typography-scale-lineHeight-400)` |
| `--ds-typography-roles-headings-steps-h5-letterSpacing` | `var(--ds-typography-scale-letterSpacing-400)` |
| `--ds-typography-roles-headings-steps-h6-fontSize` | `var(--ds-typography-scale-fontSize-300)` |
| `--ds-typography-roles-headings-steps-h6-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-headings-steps-h6-lineHeight` | `var(--ds-typography-scale-lineHeight-300)` |
| `--ds-typography-roles-headings-steps-h6-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-headings-family` | `var(--ds-typography-families-sans)` |
| `--ds-typography-scale-fontSize-100` | `10px` |
| `--ds-typography-scale-fontSize-200` | `13px` |
| `--ds-typography-scale-fontSize-250` | `14px` |
| `--ds-typography-scale-fontSize-300` | `16px` |
| `--ds-typography-scale-fontSize-350` | `18px` |
| `--ds-typography-scale-fontSize-400` | `20px` |
| `--ds-typography-scale-fontSize-500` | `25px` |
| `--ds-typography-scale-fontSize-600` | `31px` |
| `--ds-typography-scale-fontSize-700` | `39px` |
| `--ds-typography-scale-fontSize-800` | `49px` |
| `--ds-typography-scale-fontSize-b110` | `11px` |
| `--ds-typography-scale-fontSize-b120` | `12px` |
| `--ds-typography-scale-lineHeight-100` | `15px` |
| `--ds-typography-scale-lineHeight-200` | `19px` |
| `--ds-typography-scale-lineHeight-250` | `20px` |
| `--ds-typography-scale-lineHeight-300` | `24px` |
| `--ds-typography-scale-lineHeight-400` | `26px` |
| `--ds-typography-scale-lineHeight-500` | `30px` |
| `--ds-typography-scale-lineHeight-600` | `37px` |
| `--ds-typography-scale-lineHeight-700` | `43px` |
| `--ds-typography-scale-lineHeight-800` | `54px` |
| `--ds-typography-scale-lineHeight-b160` | `16px` |
| `--ds-typography-scale-lineHeight-b180` | `18px` |
| `--ds-typography-scale-letterSpacing-100` | `0` |
| `--ds-typography-scale-letterSpacing-200` | `0` |
| `--ds-typography-scale-letterSpacing-300` | `0` |
| `--ds-typography-scale-letterSpacing-400` | `0` |
| `--ds-typography-scale-letterSpacing-500` | `0` |
| `--ds-typography-scale-letterSpacing-600` | `0` |
| `--ds-typography-scale-letterSpacing-700` | `0` |
| `--ds-typography-scale-letterSpacing-800` | `0` |
| `--ds-typography-weights-bold` | `700` |
| `--ds-typography-weights-medium` | `500` |
| `--ds-typography-weights-regular` | `400` |
| `--ds-typography-weights-semibold` | `600` |
| `--ds-typography-families-mono` | `JetBrains Mono` |
| `--ds-typography-families-sans` | `Inter` |

## semanticColors


| CSS variable | Value |
|-------------|-------|
| `--ds-semanticColors-icon-info` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-icon-brand` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-icon-error` | `var(--ds-color-colors-red-600)` |
| `--ds-semanticColors-icon-primary` | `var(--ds-color-colors-gray-900)` |
| `--ds-semanticColors-icon-success` | `var(--ds-color-colors-green-600)` |
| `--ds-semanticColors-icon-warning` | `var(--ds-color-colors-yellow-600)` |
| `--ds-semanticColors-icon-on-color` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-icon-tertiary` | `var(--ds-color-colors-gray-400)` |
| `--ds-semanticColors-icon-secondary` | `var(--ds-color-colors-gray-700)` |
| `--ds-semanticColors-icon-on-primary` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-icon-on-tertiary` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-icon-on-secondary` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-text-info` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-text-link` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-text-brand` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-text-error` | `var(--ds-color-colors-red-600)` |
| `--ds-semanticColors-text-primary` | `var(--ds-color-colors-gray-900)` |
| `--ds-semanticColors-text-success` | `var(--ds-color-colors-green-600)` |
| `--ds-semanticColors-text-warning` | `var(--ds-color-colors-yellow-600)` |
| `--ds-semanticColors-text-disabled` | `var(--ds-color-colors-gray-400)` |
| `--ds-semanticColors-text-tertiary` | `var(--ds-color-colors-gray-500)` |
| `--ds-semanticColors-text-secondary` | `var(--ds-color-colors-gray-700)` |
| `--ds-semanticColors-text-link-hover` | `var(--ds-color-colors-blue-700)` |
| `--ds-semanticColors-text-on-inverse` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-text-on-primary` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-text-on-tertiary` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-text-on-secondary` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-border-info` | `var(--ds-color-colors-blue-500)` |
| `--ds-semanticColors-border-error` | `var(--ds-color-colors-red-500)` |
| `--ds-semanticColors-border-focus` | `var(--ds-color-colors-blue-500)` |
| `--ds-semanticColors-border-accent` | `var(--ds-color-colors-blue-500)` |
| `--ds-semanticColors-border-strong` | `var(--ds-color-colors-gray-500)` |
| `--ds-semanticColors-border-subtle` | `var(--ds-color-colors-gray-200)` |
| `--ds-semanticColors-border-default` | `var(--ds-color-colors-gray-300)` |
| `--ds-semanticColors-border-success` | `var(--ds-color-colors-green-500)` |
| `--ds-semanticColors-border-warning` | `var(--ds-color-colors-yellow-500)` |
| `--ds-semanticColors-border-disabled` | `var(--ds-color-colors-gray-200)` |
| `--ds-semanticColors-border-stronger` | `var(--ds-color-colors-gray-700)` |
| `--ds-semanticColors-border-info-hover` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-border-error-hover` | `var(--ds-color-colors-red-600)` |
| `--ds-semanticColors-border-info-subtle` | `var(--ds-color-colors-blue-300)` |
| `--ds-semanticColors-border-error-subtle` | `var(--ds-color-colors-red-300)` |
| `--ds-semanticColors-border-success-hover` | `var(--ds-color-colors-green-600)` |
| `--ds-semanticColors-border-warning-hover` | `var(--ds-color-colors-yellow-600)` |
| `--ds-semanticColors-border-success-subtle` | `var(--ds-color-colors-green-300)` |
| `--ds-semanticColors-border-warning-subtle` | `var(--ds-color-colors-yellow-300)` |
| `--ds-semanticColors-status-info-border` | `var(--ds-color-colors-blue-500)` |
| `--ds-semanticColors-status-info-default` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-status-info-surface` | `var(--ds-color-colors-blue-100)` |
| `--ds-semanticColors-status-info-on-surface` | `var(--ds-color-colors-blue-700)` |
| `--ds-semanticColors-status-error-border` | `var(--ds-color-colors-red-500)` |
| `--ds-semanticColors-status-error-default` | `var(--ds-color-colors-red-600)` |
| `--ds-semanticColors-status-error-surface` | `var(--ds-color-colors-red-100)` |
| `--ds-semanticColors-status-error-on-surface` | `var(--ds-color-colors-red-700)` |
| `--ds-semanticColors-status-neutral-border` | `var(--ds-color-colors-gray-600)` |
| `--ds-semanticColors-status-neutral-default` | `var(--ds-color-colors-gray-700)` |
| `--ds-semanticColors-status-neutral-surface` | `var(--ds-color-colors-gray-100)` |
| `--ds-semanticColors-status-neutral-on-surface` | `var(--ds-color-colors-gray-900)` |
| `--ds-semanticColors-status-success-border` | `var(--ds-color-colors-green-500)` |
| `--ds-semanticColors-status-success-default` | `var(--ds-color-colors-green-700)` |
| `--ds-semanticColors-status-success-surface` | `var(--ds-color-colors-green-100)` |
| `--ds-semanticColors-status-success-on-surface` | `var(--ds-color-colors-green-700)` |
| `--ds-semanticColors-status-warning-border` | `var(--ds-color-colors-yellow-500)` |
| `--ds-semanticColors-status-warning-default` | `var(--ds-color-colors-yellow-500)` |
| `--ds-semanticColors-status-warning-surface` | `var(--ds-color-colors-yellow-100)` |
| `--ds-semanticColors-status-warning-on-surface` | `var(--ds-color-colors-yellow-700)` |
| `--ds-semanticColors-content-muted` | `var(--ds-color-colors-gray-500)` |
| `--ds-semanticColors-content-accent` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-content-subtle` | `var(--ds-color-colors-gray-700)` |
| `--ds-semanticColors-content-default` | `var(--ds-color-colors-gray-900)` |
| `--ds-semanticColors-content-inverse` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-content-on-info` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-content-disabled` | `var(--ds-color-colors-gray-400)` |
| `--ds-semanticColors-content-on-error` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-content-on-accent` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-content-on-success` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-content-on-warning` | `var(--ds-color-colors-gray-900)` |
| `--ds-semanticColors-content-on-secondary` | `var(--ds-color-colors-gray-900)` |
| `--ds-semanticColors-content-on-info-subtle` | `var(--ds-color-colors-blue-700)` |
| `--ds-semanticColors-content-on-error-subtle` | `var(--ds-color-colors-red-700)` |
| `--ds-semanticColors-content-on-success-subtle` | `var(--ds-color-colors-green-700)` |
| `--ds-semanticColors-content-on-warning-subtle` | `var(--ds-color-colors-yellow-700)` |
| `--ds-semanticColors-content-on-accent-disabled` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-surface-info` | `var(--ds-color-colors-blue-500)` |
| `--ds-semanticColors-surface-error` | `var(--ds-color-colors-red-600)` |
| `--ds-semanticColors-surface-accent` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-surface-canvas` | `var(--ds-color-colors-gray-100)` |
| `--ds-semanticColors-surface-subtle` | `var(--ds-color-colors-gray-100)` |
| `--ds-semanticColors-surface-default` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-surface-inverse` | `var(--ds-color-colors-gray-900)` |
| `--ds-semanticColors-surface-overlay` | `var(--ds-color-colors-gray-50)` |
| `--ds-semanticColors-surface-success` | `var(--ds-color-colors-green-700)` |
| `--ds-semanticColors-surface-warning` | `var(--ds-color-colors-yellow-500)` |
| `--ds-semanticColors-surface-secondary` | `var(--ds-color-colors-gray-200)` |
| `--ds-semanticColors-surface-info-hover` | `var(--ds-color-colors-blue-600)` |
| `--ds-semanticColors-surface-error-hover` | `var(--ds-color-colors-red-700)` |
| `--ds-semanticColors-surface-info-subtle` | `var(--ds-color-colors-blue-100)` |
| `--ds-semanticColors-surface-accent-hover` | `var(--ds-color-colors-blue-700)` |
| `--ds-semanticColors-surface-error-subtle` | `var(--ds-color-colors-red-100)` |
| `--ds-semanticColors-surface-info-pressed` | `var(--ds-color-colors-blue-700)` |
| `--ds-semanticColors-surface-subtle-hover` | `var(--ds-color-colors-gray-300)` |
| `--ds-semanticColors-surface-default-hover` | `var(--ds-color-colors-gray-200)` |
| `--ds-semanticColors-surface-error-pressed` | `var(--ds-color-colors-red-800)` |
| `--ds-semanticColors-surface-info-disabled` | `var(--ds-color-colors-blue-200)` |
| `--ds-semanticColors-surface-inverse-hover` | `var(--ds-color-colors-gray-800)` |
| `--ds-semanticColors-surface-success-hover` | `var(--ds-color-colors-green-800)` |
| `--ds-semanticColors-surface-warning-hover` | `var(--ds-color-colors-yellow-600)` |
| `--ds-semanticColors-surface-accent-pressed` | `var(--ds-color-colors-blue-800)` |
| `--ds-semanticColors-surface-error-disabled` | `var(--ds-color-colors-red-200)` |
| `--ds-semanticColors-surface-success-subtle` | `var(--ds-color-colors-green-100)` |
| `--ds-semanticColors-surface-warning-subtle` | `var(--ds-color-colors-yellow-100)` |
| `--ds-semanticColors-surface-accent-disabled` | `var(--ds-color-colors-blue-200)` |
| `--ds-semanticColors-surface-default-pressed` | `var(--ds-color-colors-gray-300)` |
| `--ds-semanticColors-surface-secondary-hover` | `var(--ds-color-colors-gray-300)` |
| `--ds-semanticColors-surface-success-pressed` | `var(--ds-color-colors-green-700)` |
| `--ds-semanticColors-surface-warning-pressed` | `var(--ds-color-colors-yellow-700)` |
| `--ds-semanticColors-surface-default-disabled` | `var(--ds-color-colors-gray-100)` |
| `--ds-semanticColors-surface-default-selected` | `var(--ds-color-colors-gray-200)` |
| `--ds-semanticColors-surface-success-disabled` | `var(--ds-color-colors-green-200)` |
| `--ds-semanticColors-surface-warning-disabled` | `var(--ds-color-colors-yellow-200)` |
| `--ds-semanticColors-surface-secondary-pressed` | `var(--ds-color-colors-gray-400)` |
| `--ds-semanticColors-surface-secondary-disabled` | `var(--ds-color-colors-gray-100)` |
