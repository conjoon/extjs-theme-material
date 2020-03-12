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

var harness = new Siesta.Harness.Browser.ExtJS();

harness.configure({
    title          : "theme-cn_material",
    disableCaching : true,
    loaderPath     : {

        "conjoon.theme.material.overrides.cn_navport" : "../overrides/coon/navport",

        "conjoon.theme.material" : "../src",


        /**
         * Requirements
         */
        "coon.navport.view" : "../../lib-cn_navport/src/view",

        "coon.navport.view.NavigationTree" : "../../lib-cn_navport/src/view/NavigationTree.js",
        "coon.navport.view.NavigationToolbar" : "../../lib-cn_navport/classic/src/view/NavigationToolbar.js",


        "coon.comp.list" : "../../lib-cn_comp/src/list",
        "coon.comp.form" : "../../lib-cn_comp/classic/src/form",
        "coon.comp.component" : "../../lib-cn_comp/classic/src/component",

        "coon.core" : "../../lib-cn_core/src",

        "coon.navport.view.controller" : "../../lib-cn_navport/src/view/controller",

        "coon.navport.store" : "../../lib-cn_navport/src/store",
        "coon.navport.model" : "../../lib-cn_navport/src/model",
        "coon.navport.data"  : "../../lib-cn_navport/src/data"


    },
    preload        : [
        conjoon.tests.config.paths.extjs.css.url,
        conjoon.tests.config.paths.extjs.js.url
    ]
});

harness.start({
    group : "classic",
    items : [{
        group : "coon",
        items : [{
            group : "navport",
            items : [{
                group : "view",
                items : [
                    "./overrides/src/coon/navport/view/NavigationToolbarTest.js"
                ]
            }]
        }]
    }]}, {
    group : "universal",
    items : [{
        group : "conjoon",
        items : [{
            group : "theme",
            items : [{
                group : "material",
                items : [
                    "./src/MaterialTest.js"
                ]
            }]
        }]
    }, {
        group : "coon",
        items : [{
            group : "navport",
            items : [{
                group : "view",
                items : [
                    "./overrides/src/coon/navport/view/NavigationTreeTest.js"
                ]
            }]
        }]
    }]
});
