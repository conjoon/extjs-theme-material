/**
 * conjoon
 * extjs-theme-material
 * Copyright (C) 2021-2022 Thorsten Suckow-Homberg https://github.com/conjoon/extjs-theme-material
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


    // +-------------------------------------------------------
    // | Tests
    // +-------------------------------------------------------

    t.it("plugin", function (t) {

        let permaNav, mode = undefined;
        const
            plugin = Ext.create("conjoon.theme.material.plugin.ModeSwitchPlugin"),
            themeMock = {
                getMode: () => mode,
                setMode: newMode => mode = newMode
            },
            cmpMock = {},
            tbar = Ext.create("coon.navport.view.NavigationToolbar"),
            themeSpy = t.spyOn(coon.core.ThemeManager, "getTheme").and.callFake(() => themeMock),
            cmpSpy = t.spyOn(tbar, "addPermanentNavigation").and.callFake(nav => permaNav = nav);


        t.isInstanceOf(plugin, "Ext.plugin.Abstract");

        t.expect(() => plugin.init(cmpMock)).toThrow();

        plugin.init(tbar);

        t.expect(cmpSpy.calls.count()).toBe(1);
        t.expect(cmpSpy.calls.mostRecent().args[0]).toBe(permaNav);

        const button = Object.assign(permaNav.items[0], {setIconCls: function (iconCls) {this.iconCls = iconCls;}});

        t.expect(button.iconCls).toBe("fas fa-moon");

        t.expect(mode).toBeUndefined();

        button.handler(button);
        t.expect(mode).toBe("light");
        t.expect(button.iconCls).toBe("fas fa-sun");

        button.handler(button);
        t.expect(mode).toBe("dark");

        mode = "light";
        plugin.init(tbar);

        t.expect(permaNav.items[0].iconCls).toBe("fas fa-sun");

        [themeSpy, cmpSpy].map(spy => spy.remove());
    });

});
