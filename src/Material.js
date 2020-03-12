/**
 * conjoon
 * theme-cn_material
 * Copyright (C) 2020 Thorsten Suckow-Homberg https://github.com/conjoon/theme-cn_material
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
 * Custom theme settings for conjoon.
 *
 * @example
 *
 * conjoon.theme.material.Material.setDarkMode(true);
 *
 */
Ext.define("conjoon.theme.material.Material", {


    singleton : true,


    /**
     * Sets the dark / light mode with colors specific for
     * conjoon.
     *
     * @param {Boolean} dark
     *
     * @return {Boolean} false if Fashion is anot available, otherwise true
     */
    setDarkMode : function (dark= true) {

        if (!window.Fashion) {
            return false;
        }

        if (dark) {
            Fashion.css.setVariables({
                "dark-mode" : "true",
                "base-color": "#35baf6",
                "color": "#d6d6d6",
                "selected-background-color": "#3e4953",
                "base-dark-color": "#3e4953",
                "accent-color" : "#35baf6",
                "accent-foreground-color" : "#333333",
                "overlay-color" : "rgba(0, 0 , 0, .5)"
            });
        } else {
            Fashion.css.setVariables({
                "dark-mode": "false",
                "accent-color": "#35baf6",
                "accent-foreground-color": "#6b6b6b",
                "base-color": "#35baf6",
                "overlay-color": "rgba(202, 202 , 202, .4)",
                "color": "#484848"
            });
        }

        return true

    }


});