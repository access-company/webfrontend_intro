module.exports = {
  webpack: function(config, env) {
    config.module.rules[1].use[0].options.ignore = true;
    config.module.rules[1].use[0].options.useEslintrc = true;
    return config;
  },
  jest: function(config) {
    return config;
  },
}