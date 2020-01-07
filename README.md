## svelte-todo

[![Build Status](https://travis-ci.com/peterdee/svelte-todo.svg?branch=stage)](https://travis-ci.com/peterdee/svelte-todo)

[![Known Vulnerabilities](https://snyk.io/test/github/peterdee/svelte-todo/badge.svg?targetFile=package.json)](https://snyk.io/test/github/peterdee/svelte-todo?targetFile=package.json)

This is a simple Todo-list application, created with [Svelte](https://svelte.dev).

Project was created from a [Svelte application template](https://github.com/sveltejs/template) using [degit](https://github.com/Rich-Harris/degit).

Check [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsvelte-todo.herokuapp.com%2F&tab=desktop) for the performance information and bundle sizes.

### Deploy

- `git clone https://github.com/peterdee/svelte-todo`
- `cd ./svelte-todo`
- `nvm use 13.5` (please see the actual Node version in [package.json](package.json) file)
- `npm i` (use `npm i --prod` for stage / production)

### Lanuch

**Development**:

- `npm run dev`

The app will be available at http://localhost:8080.

[Rollup](https://rollupjs.org) is used for bundling and hot reloading by default.

**Stage / production**:

- `npm run build`

This creates an optimized production build.

This build can then be served with an included Koa server:

- `npm run start`

The app will be available at http://localhost:8080.

### Testing

- `npm run test`

### Heroku deployment

The `stage` branch is deployed to [Heroku](https://herokuapp.com) automatically.

The app is available at https://svelte-todo.herokuapp.com.
