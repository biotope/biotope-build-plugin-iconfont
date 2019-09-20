import { BuildPluginIconfontConfig } from './typings/Config';
import webfont from 'webfont';
import * as merge from 'deepmerge';
import * as fs from 'fs-extra';
import defaultConfig from './defaultConfig';
import { watch } from 'chokidar';

const createIconfont = async (pluginConfig: BuildPluginIconfontConfig, buildConfig) => {
  const result = await webfont({
    files: pluginConfig.srcPatterns,
    fontName: pluginConfig.fontName,
    template: 'css'
  })

  fs.outputFileSync(`${buildConfig.paths.distFolder}/${pluginConfig.targetPath}/${pluginConfig.fontName}.css`, result.template);
  fs.outputFileSync(`${buildConfig.paths.distFolder}/${pluginConfig.targetPath}/${pluginConfig.fontName}.ttf`, result.ttf);
  fs.outputFileSync(`${buildConfig.paths.distFolder}/${pluginConfig.targetPath}/${pluginConfig.fontName}.woff`, result.woff);
}

export default (pluginOptions: Partial<BuildPluginIconfontConfig> = {}) => {
  const pluginConfig = merge(defaultConfig, pluginOptions, {
    arrayMerge: (_, sourceArray) => sourceArray
  });
  return async (buildConfig, isServing: boolean) => {
    if(isServing) {
      const watcher = watch(pluginConfig.srcPatterns);
      watcher
        .on('ready', () => {
          createIconfont(pluginConfig, buildConfig);
          watcher.on('all', path => {
            createIconfont(pluginConfig, buildConfig);
          })
        })
    } else {
      createIconfont(pluginConfig, buildConfig);
    }
  }
}