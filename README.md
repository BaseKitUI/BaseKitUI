# BaseKitUI

A modern HTML + CSS foundation

BaseKitUI is a forward-looking project that aims to build a fully-styled set of HTML components using the latest features in CSS and HTML. This project will grow as the native features of HTML and CSS improve.

In many ways this project is a return to the days of Bootstrap, but with a modern visual design and utilising contemporary web standards. Download a zip file of CSS. Copy-paste simple HTML markup from the docs. 

## Browser support

This is an early stage project that adopts bleeding-edge CSS and HTML features and is not currently aiming for full browser support.

## Designed to be edited and owned by you

There is no NPM package. This project is designed to be copy-pasted into your codebase, not installed. Rather than overriding third-party CSS, just edit the code. Rather than configuration and customisation via endless custom properties, just edit the code. Rather than a "styling API", just edit the code. 

## Compatibility

Because this project is just CSS, it is compatible with every backend framework (Laravel, Rails, Django, etc), templating language, static site generator, CMS, frontend JavaScript framework (React, Vue, Svelte, Angular, Ember, Solid, Qwik, Marko, Stimulus, HTMX...) and meta-framework (Next.js etc).

## Tailwind compatability

This project is designed to be compatible with, but not dependent on, Tailwind. CSS custom properties used by this project follow the Tailwind naming convention so can be easily added to your Tailwind `@theme`. The reset used by this project is almost identical to Tailwind Preflight.

## How this project approaches CSS

- Uses vanilla CSS (not Sass or CSS-in-JS or shadow DOM)
- Uses OKLCH for colors.
- Avoids arcane naming conventions
- For performance reasons uses system fonts via system-ui.

## JavaScript

The overwhelming focus of this project is utilising the native feature set of HTML and CSS. The vast majority of components work without JavaScript. When JavaScript is strictly necessary, this project uses vanilla JavaScript and avoids dependencies.

## Contributing and roadmap

For current todos, see the [project board](https://github.com/orgs/BaseKitUI/projects/1). For the future roadmap, see [roadmap.md](https://github.com/BaseKitUI/BaseKitUI/blob/main/roadmap.md). For suggestions and ideas, start a new [discussion](https://github.com/orgs/BaseKitUI/discussions).

The documentation website will be built using Astro.

## Visual design

The visual design takes inspiration from Shadcn, Tailwind UI, React Aria, Base UI, Flux UI and the design of GitHub.com.