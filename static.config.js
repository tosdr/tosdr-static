import path from 'path'
import Parser from 'rss-parser';
import fetch from 'node-fetch';

const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  stagingSiteRoot: 'https://vinnl.gitlab.io/',
  stagingBasePath: 'tosdr-static',
  getSiteData: () => ({
    title: 'Terms of Service; Didn\'t Read',
  }),
  getRoutes: async () => {
    const response = await fetch('https://tosdr.org/api/1/all.json');
    const reviews = await response.json();
    delete reviews['tosdr/api/version'];
    delete reviews['tosdr/data/version'];

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: async () => {
          const parser = new Parser();
          const feed = await parser.parseURL('https://blog.tosdr.org/rss/');

          return {
            reviews,
            blog: feed,
          };
        },
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/get-involved',
        component: 'src/containers/GetInvolved',
      },
      {
        path: '/downloads',
        component: 'src/containers/Downloads',
      },
      {
        path: '/api',
        component: 'src/containers/Api',
      },
      {
        path: '/service',
        component: 'src/containers/ServiceOverview',
        getData: () => ({
          reviews,
        }),
        children: Object.entries(reviews).map(([key, review]) => ({
          path: `/${review.slug}`,
          component: 'src/containers/Service',
          getData: () => ({
            domain: key.replace('tosdr/review/', '').trim(),
            review,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    // Add .ts and .tsx extension to resolver
    config.resolve.extensions.push('.ts', '.tsx')

    // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
    // to react-statics alias resolution
    config.resolve.alias = typescriptWebpackPaths.resolve.alias

    // Added manually; I'd hoped that React Static would do this themselves,
    // but I got an error that the plugin wasn't added, so I added this.
    // Hopefully it can be removed with a new version of React Static.
    config.plugins.push(new ExtractTextPlugin('styles.css'))

    // We replace the existing JS rule with one, that allows us to use
    // both TypeScript and JavaScript interchangeably
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
