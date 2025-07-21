# BaseKitUI

A modern HTML + CSS foundation

BaseKitUI is a forward-looking project that aims to build a fully-styled set of HTML components using the latest features in CSS and HTML. This project will grow as the native features of HTML and CSS improve. This is an early stage project that is not currently aiming for full browser support.

In many ways this project is a return to the days of Bootstrap, but with a modern visual design and utilising contemporary web standards. Download a zip file of CSS. Copy-paste simple HTML markup from the docs. 

For current todos, see the [project board](https://github.com/orgs/BaseKitUI/projects/1). For the future roadmap, see [roadmap.md](https://github.com/BaseKitUI/BaseKitUI/blob/main/roadmap.md).

## The technical principles of this project

- Uses vanilla CSS (not Sass or CSS-in-JS)
- There is no NPM package. This project is designed to be copy-pasted, not installed.
- Aims for simplicity
- The documentation website is built using Astro
- Avoids arcane naming conventions
- Uses the most minimal amount of JavaScript possible. When JavaScript is strictly necessary, uses vanilla JavaScript with no dependencies.
- For colors, uses OKLCH, defined as CSS custom properties.
- For performance reasons uses system fonts via system-ui.
- 0 dependencies
- Is designed to be compatible with, but not dependent on, Tailwind.

## Visual design

The visual design takes inspiration from Shadcn, Tailwind UI, React Aria, Base UI, Flux UI and the design of GitHub.com.

## Compatibility

Because this project is just CSS, it is compatible with every backend templating language, static site generator, CMS, and JavaScript framework (React, Vue, Svelte, Angular, Ember, Solid, Qwik, Marko, Stimulus, HTMX...)
