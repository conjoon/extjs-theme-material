# @conjoon/extjs-theme-material Documentation

## Configuration options

The following options can be configured to change colors of the application the theme is used in:

- `modes.dark.name` - The display name of the `dark` theme mode.
- `modes.dark.default` - If the theme mode should be used as default.
- `modes.dark.config` - CSS Variables configuration. The variables have to be already existing in the theme itself.
  <br><br>
- `modes.light.name` - The display name of the `light` theme mode.
- `modes.light.default` - If the theme mode should be used as default.
- `modes.light.config` - CSS Variables configuration. The variables have to be already existing in the theme itself.

_Example:_
```json
{
    "modes": {
        "dark": {
            "name": "Dark Mode",
            "default": true,
            "config": {
                "dark-mode": "true",
                "accent-color": "#35baf6",
                "disabled-color": "rgba(105, 105, 105, 0.38)",
                "accent-foreground-color": "#6b6b6b",
                "base-color": "#35baf6",
                "overlay-color": "rgba(0, 0 , 0, .6)",
                "color": "#d6d6d6",
                "selected-background-color": "#3e4953",
                "base-dark-color": "#3e4953"
            }
        },
        "light": {
            "name": "Light Mode",
            "default": false,
            "config": {
                "dark-mode": "false",
                "accent-color": "#35baf6",
                "accent-foreground-color": "#333333",
                "base-color": "#35baf6",
                "overlay-color": "rgba(0, 0 , 0, .5)",
                "color": "#484848"
            }
        }
    }
}
```

## Usage
Specified as `theme` property in conjoon's `app.json`.
Additionally, packages providing styling information might refer to this theme
to access various variable definitions.

## Note
### Registering as a coon.js-Theme
This theme automatically registers itself by setting the following global properties:
```javascript
Ext.theme.is["coon-js-theme"] = true;
Ext.theme.name = "extjs-theme-material";
```
This is to identify itself later on for proper inclusion in the coon.js-environment.

### Loading Source Files
Although the package is registered as a static-theme package, sources such as the `conjoon.theme.material.Theme`
cannot be required in a production build if not specified explicitly. There is a dummy-override in the `init.js`-file
defined that makes sure that the class is made available to applications.