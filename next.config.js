const fs = require('fs');

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
});

const blogPosts = {};

fs
  .readdirSync('./blog/posts')
  .map((f) => f.replace(/\.mdx/, ''))
  .forEach((p) => (blogPosts[`/blog/${p}`] = { page: '/blog', query: { post: p } }));

module.exports = withMDX({
  pageExtensions: [ 'js', 'jsx', 'mdx' ],
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/ai': { page: '/ai' },
      '/ai/sentiment': { page: '/ai/sentiment' },
      '/ai/translate': { page: '/ai/translate' },
      '/blog': { page: '/blog' },
      ...blogPosts
    };
  }
});
