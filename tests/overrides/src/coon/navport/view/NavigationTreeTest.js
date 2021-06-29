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

describe("conjoon.theme.material.overrides.cn_navport.view.NavigationTreeTest", function (t) {

    var tree;

    t.afterEach(function () {
        if (tree) {
            tree.destroy();
            tree = null;
        }
    });

    // load override first
    t.requireOk("conjoon.theme.material.overrides.cn_navport.view.NavigationTree", function () {

        t.it("Should properly override the NavigationTree", function (t) {

            tree = Ext.create("coon.navport.view.NavigationTree");

            t.expect(tree.getUi()).toBe("cn_navport-navtree");
        });

    });


});
