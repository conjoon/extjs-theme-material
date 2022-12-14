/**
 * conjoon
 * extjs-theme-material
 * Copyright (C) 2021-2022 Thorsten Suckow-Homberg https://github.com/conjoon/extjs-app-imapuser
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
 * Plugin for showing a segmented button in the toolbar of the NavigationViewport,
 * for switching between dark/light mode of the installed theme.
 *
 */
Ext.define("conjoon.theme.material.plugin.ModeSwitchPlugin", {

    extend: "Ext.plugin.Abstract",

    requires: [
        "coon.core.ThemeManager",
        "coon.navport.view.NavigationToolbar"
    ],


    /**
     * @inheritdoc
     */
    init: function (targetCmp) {

        const theme = coon.core.ThemeManager.getTheme();

        if (!(targetCmp instanceof coon.navport.view.NavigationToolbar)) {
            throw new Error("\"targetCmp\" must be an instance of coon.navport.view.NavigationToolbar");
        }

        targetCmp.addPermanentNavigation({
            index: 1,
            items: [{
                xtype: "button",
                iconCls: theme.getMode() === "light" ? "fas fa-sun" : "fas fa-moon",
                scale: "small",
                handler: btn => {
                    btn.setIconCls(theme.getMode() === "light" ? "fas fa-moon" : "fas fa-sun");
                    theme.setMode(theme.getMode() === "light" ? "dark" : "light");
                }
            }]
        });
    }

});
