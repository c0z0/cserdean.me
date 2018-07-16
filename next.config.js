module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/ai': { page: '/ai' },
      '/ai/sentiment': { page: '/ai/sentiment' },
      '/ai/translate': { page: '/ai/translate' }
    };
  }
};
