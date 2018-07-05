import axios from 'axios'
import path from 'path'
import fs from 'fs';
import util from 'util';
import Parser from 'rss-parser';

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
    const readdir = util.promisify(fs.readdir);
    const readFile = util.promisify(fs.readFile);
    // Note: we're assuming data/services to contain the API data, i.e. from here:
    // https://github.com/tosdr/tosdr.org/tree/master/api/1/service/
    const filenames = await readdir(path.resolve(__dirname, './data/v2/service'));
    const jsonFilenames = filenames.filter(filename => filename.substr(-5) === '.json');
    const files = await Promise.all(jsonFilenames.map(fileName => readFile(path.resolve(__dirname, './data/v2/service', fileName), 'utf8')));
    const services = files.map(file => JSON.parse(file));

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: async () => {
          const parser = new Parser();
          const feed = await parser.parseURL('https://blog.tosdr.org/rss/');

          return {
            services,
            blog: feed,
          };
        },
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/downloads',
        component: 'src/containers/Downloads',
      },
      {
        path: '/service',
        component: 'src/containers/ServiceOverview',
        getData: () => ({
          services,
        }),
        children: services.map(service => ({
          path: `/${service.id}`,
          component: 'src/containers/Service',
          getData: () => ({
            service,
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
