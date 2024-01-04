# KVCRM Remix UI

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A demo application to illustrate how [Spring Boot](https://spring.io/) works with [Remix Framework](https://remix.run/) and [React Components](https://reactjs.org/).

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
pnpm dev
```

This starts your app in development mode, rebuilding assets on file changes.

Includes the following configuration:

- Remix
- Vite (Remix unstable support)
- Prettier
- ESlint

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
