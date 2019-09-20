import { BuildPluginIconfontConfig } from './typings/Config';

export default {
  srcPatterns: [
    '**/*.svg'
  ],
  fontName: 'icons',
  fontTypes: [
    'ttf',
    'woff'
  ],
  targetPath: 'resources/css/iconfont'
} as BuildPluginIconfontConfig