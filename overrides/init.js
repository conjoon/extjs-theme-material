/**
 * conjoon
 * extjs-theme-material
 * Copyright (C) 2021 Thorsten Suckow-Homberg https://github.com/conjoon/extjs-theme-material
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
 * This hack is requires to make sure the Theme-class resource is exposed with
 * production builds. If the fqn is not required directly by any plugin or the application itself,
 * ExtJS will not bundle the sources into the build.
 */
Ext.require("conjoon.theme.material.Theme");
Ext.require("conjoon.theme.material.plugin.ModeSwitchPlugin");


Ext.namespace("Ext.theme.is")["coon-js-theme"] = true;
Ext.theme.name = "extjs-theme-material";
