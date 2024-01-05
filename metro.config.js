const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs','jsx','js','json','ts','tsx','svg','png','jpg','jpeg','gif','webp','eot','otf','ttf','woff','woff2');

module.exports = defaultConfig;