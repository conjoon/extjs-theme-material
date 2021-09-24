/**
 * conjoon
 * extjs-theme-material
 * Copyright (C) 2020-2021 Thorsten Suckow-Homberg https://github.com/conjoon/extjs-theme-material
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
 * Custom styles for the intial Navigation Toolbar.
 */
Ext.define("conjoon.theme.material.overrides.cn_navport.view.NavigationToolbar", {

    override: "coon.navport.view.NavigationToolbar",

    initComponent: function () {

        var me = this;

        Ext.apply(me.items[0], {
            cls: "conjoon-logo",
            html: "<div class=\"main-logo\"><div class=\"fas fa-envelope logo\"></div>conjoon</div>",
            width: 250
        });

        delete me.items[1].text;
        me.items[1].iconCls =  "fas fa-bars";

        me.callParent();
    }


});