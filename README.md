This is a static site that is generated based on the ToS;dr API.

## Motivation

- API as the single source of truth
- Practically no risk of downtime due to being a static site
- Integrate the blog into the main site (latest posts are incorporated at build time - after a new blog post, the site can be regenerated with a webhook)
- Single command to build the site
- Proper URLs for navigation (though we should probably look at making sure that the links of the old site still work)
- High performance

The site is built using [React Static](https://react-static.js.org/).

## Running

All commands should be run in the top level of this repo. We're assuming [Yarn](https://yarnpkg.com/) is installed, and all dependencies are installed by running `yarn` in the top-level directory.

### In development mode

```bash
$ yarn start
```

### Testing the production build

```bash
$ yarn stage
$ yarn serve
```

### Building for production

This is usually done in CI, but for reference:

```bash
$ yarn build
```
