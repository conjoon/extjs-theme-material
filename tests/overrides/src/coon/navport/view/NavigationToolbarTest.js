/**
 * conjoon
 * extjs-theme-material
 * Copyright (C) 2020-2022 Thorsten Suckow-Homberg https://github.com/conjoon/extjs-theme-material
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

StartTest(t => {

    let toolbar;

    t.beforeEach(function () {

    });

    t.afterEach(function () {
        if (toolbar) {
            toolbar.destroy();
            toolbar = null;
        }
    });

    // load override first
    t.requireOk(
        "coon.core.ConfigManager",
        "conjoon.theme.material.overrides.cn_navport.view.NavigationToolbar", function () {

            t.it("Should properly override the NavigationToolbar",  t => {

                coon.core.ConfigManager.register("conjoon", {});

                toolbar = Ext.create("coon.navport.view.NavigationToolbar");

                t.expect(toolbar.down("component").reference).toContain("cn_navport_ref_applogo");
                t.expect(toolbar.down("button").reference).toContain("cn_navport_ref_hidenavbtn");

                t.expect(toolbar.down("component[cls=conjoon-logo]").html).toContain("conjoon</div>");

                coon.core.ConfigManager.configs = undefined;
                coon.core.ConfigManager.register("conjoon", {title: "My Website Set By Config"});

                toolbar = Ext.create("coon.navport.view.NavigationToolbar");

                t.expect(toolbar.down("component[cls=conjoon-logo]").html).toContain("My Website Set By Config</div>");
            });

        });


});
