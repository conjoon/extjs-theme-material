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

describe("conjoon.theme.material.ThemeTest", function (t) {

    const FASHIONMOCK = {
        css : {
            vars : {},

            setVariables : function (obj) {
                this.vars = obj;
            },
            getVariables : function (){
                return this.vars;
            }
        }
    };

    t.afterEach(function () {
        window.Fashion = undefined;
    });

    // +-------------------------------------------------------
    // | Tests
    // +-------------------------------------------------------

    t.it("set() / get()", function (t) {

        const theme = Ext.create("conjoon.theme.material.Theme");

        t.expect(theme.getDefaultMode()).toBe("dark");
        t.expect(theme.getMode()).toBe("dark");

        t.expect(theme.set("somekey", "someval")).toBe(theme);
        t.expect(theme.get("somekey")).toBe("someval");

        window.Fashion = FASHIONMOCK;
        Fashion.css.setVariables({"foo" : "bar"});

        t.expect(theme._modes["dark"]["config"]["foo"]).toBeUndefined();
        t.expect(theme.get("foo")).toBe("bar");

        theme.set("color", "red");
        t.expect(theme._modes["dark"]["config"]["color"]).toBe("red");
        t.expect(theme.get("color")).toBe("red");
        t.expect(Fashion.css.getVariables()["color"]).toBe("red");
        t.expect(Fashion.css.getVariables()["foo"]).toBeUndefined();
    });


    t.it("available modes", function (t) {

        const theme = Ext.create("conjoon.theme.material.Theme");

        t.expect(theme.getModes().light).toBeDefined();
        t.expect(theme.getModes().dark).toBeDefined();
    });


    t.it("setMode()", function (t) {

        const
            theme = Ext.create("conjoon.theme.material.Theme"),
            baseConfig = {
                "overlay-color" : "blue",
                "one" : "",
                "two" : ""
            };

        window.Fashion = FASHIONMOCK;

        Fashion.css.setVariables(baseConfig);
        t.expect(Fashion.css.getVariables()).toEqual(baseConfig);

        theme.setModes({
            "dark2" : {
                config : {
                    "dark-mode" : "truthy",
                    "base-color" : "red"
                }
            },
            "light2" : {
                config : {
                    "dark-mode" : "false",
                    "base-color" : "blue"
                }
            }
        });

        t.expect(theme.getMode()).toBe("dark2");

        let fashion = Fashion.css.getVariables();

        t.expect(fashion).toEqual({
            "dark-mode" : "truthy",
            "base-color" : "red"
        });

    });


});
