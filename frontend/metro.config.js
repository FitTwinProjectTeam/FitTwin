// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const {assetExts,sourceExts} = config.resolver;
config.resolver.assetExts =[...assetExts, 'obj','mtl'];
config.resolver.sourceExts =[...sourceExts,'js','json','ts','tsx'];


module.exports = config;
