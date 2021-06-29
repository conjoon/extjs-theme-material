/**
 * conjoon
 * extjs-theme-cn_material
 * Copyright (C) 2020-2021 Thorsten Suckow-Homberg https://github.com/conjoon/extjs-theme-cn_material
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Material theme implementation for conjoon.
 *
 * @example
 * const theme = Ext.create("conjoon.theme.material.Theme");
 * theme.getDefaultMode(); // "dark"
 * theme.setMode("dark");
 * theme.setMode("light");
 * 
 */
Ext.define("conjoon.theme.material.Theme", {

    extend : "coon.core.Theme",

    modes : {
        dark : {
            name : "Dark Mode",
            default : true,
            config : {
                "dark-mode" : "true",
                "accent-color": "#35baf6",
                "accent-foreground-color": "#6b6b6b",
                "base-color": "#35baf6",
                "overlay-color": "rgba(0, 0 , 0, .6)",
                "color": "#d6d6d6",
                "selected-background-color": "#3e4953",
                "base-dark-color": "#3e4953"
            }
        },

        light : {
            name : "Light Mode",
            default : false,
            config : {
                "dark-mode" : "false",
                "accent-color" : "#35baf6",
                "accent-foreground-color" : "#333333",
                "base-color": "#35baf6",
                "overlay-color" : "rgba(0, 0 , 0, .5)",
                "color": "#484848"
            }
            
        }
    },


    /**
     * Makes sure fashion variables are set once the mode was applied.
     *
     * @param {String} mode
     */
    updateMode : function (mode) {

        const me = this;

        if (!window.Fashion) {
            return;
        }

        const
            modes = me.getModes(),
            newMode = modes[mode];

        Fashion.css.setVariables(newMode.config);
    },
    

    /**
     * Looks up the value in Fashion as a fallback if not set in the current mode
     * and return it.
     *
     * @inheritdoc
     */
    get : function (key) {

        const me = this;

        let value = me.callParent(arguments);

        if (!value && window.Fashion) {
            let variables = Fashion.css.getVariables();
            value = key ? variables[key] : variables;
        }

        return value;
    },


    /**
     * Also sets the property in Fashion if available.
     *
     * @inheritdoc
     **/
    set : function (key, value) {

        const me = this;

        me.callParent(arguments);

        if (window.Fashion) {
            Fashion.css.setVariables({[key] : value});

        }

        return me;
    }

});