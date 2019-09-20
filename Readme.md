# biotope-build-plugin-iconfont
A plugin for @biotope/build to create iconfonts from svg

## Options
| Property      | Type     | Optional | Default                  | Description                                                             |
|---------------|----------|----------|--------------------------|-------------------------------------------------------------------------|
| `srcPatterns` | string[] | yes      | `['**/.svg**']`          | The svgs to collect into an iconfont                                    |
| `fontName`    | string   | yes      | `icons`                  | The name of the font                                                    |
| `fontTypes`   | string[] | yes      | `['ttf', 'woff']`        | The font types to be created                                            |
| `targetPath`  | string   | yes      | `resources/css/iconfont` | The path inside the dist folder to put the generated css and font files |