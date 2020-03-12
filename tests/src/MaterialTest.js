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

describe("conjoon.theme.material.MaterialTest", function (t) {

    t.requireOk("conjoon.theme.material.Material", function () {

        t.it("setDarkMode()", function (t) {

            t.expect(conjoon.theme.material.Material.setDarkMode()).toBe(false);
            t.expect(conjoon.theme.material.Material.setDarkMode(true)).toBe(false);
            t.expect(conjoon.theme.material.Material.setDarkMode(false)).toBe(false);

            window.Fashion = {css : {setVariables : function (){}}};

            t.spyOn(Fashion.css, "setVariables");

            conjoon.theme.material.Material.setDarkMode();
            t.expect(Fashion.css.setVariables.calls.mostRecent().args[0]["dark-mode"]).toBe("true");

            conjoon.theme.material.Material.setDarkMode(true);
            t.expect(Fashion.css.setVariables.calls.mostRecent().args[0]["dark-mode"]).toBe("true");

            conjoon.theme.material.Material.setDarkMode(false);
            t.expect(Fashion.css.setVariables.calls.mostRecent().args[0]["dark-mode"]).toBe("false");

        });

    });


});
