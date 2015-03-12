/** @license MIT License (c) copyright Pieter Vanderwerff */

/**
 * wire-rjs-builder plugin
 * Builder plugin for requirejs (r.js)
 * see: http://github.com/jrburke/requirejs for details
 *
 * Supports requirejs version 2.1.9+
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(e){e([],function(){function u(r,i,o,u){function v(e){function i(e,t){for(var n in e)e.hasOwnProperty(n)&&s(e[n],h(t,n))}function s(e,t){if(typeof e=="string")a(t)?o(e):f(t)&&u(e);else if(d(e))i(e,t);else if(Array.isArray(e)){var n=t+"[]";e.forEach(function(e){s(e,n)})}}function o(e){var i=e;if(e.indexOf("./")===0){var s=r.split("/");s.pop();var o=e.slice(2);s.push(o),i=s.join("/")}t.push(i),n.push(i)}function u(e){t.push(e),n.push(p+"!"+e)}function a(e){return c.test(e)}function f(e){return l.test(e)}function h(e,t){return e?e+"."+t:t}function d(e){return e&&Object.prototype.toString.call(e)=="[object Object]"}var t,n;return t=[],n=[],i(e),{runtime:t,build:n}}var a,l,c,p,d;c=e,l=t,p=n,u&&(u.moduleRegex&&(c=new RegExp(u.moduleRegex)),u.childSpecRegex&&(l=new RegExp(u.childSpecRegex)),u.wirePluginName&&(p=new RegExp(u.wirePluginName))),a=r.split(",");if(a.length>1){i(a.map(function(e){return p+"!"+e}),function(){o()});return}d=f(i.toUrl(r),"js"),h(d,function(e){var t,n;o.fromText(e),t=i(r),n=v(t),s[r]={dependencies:n.runtime,path:d},i(n.build)})}function a(e,t,n){var r,i;r=t.split(",");if(r.length>1)return;i=s[t];if(!i)throw new Error('Spec of "'+t+'" was not previously processed');h(i.path,function(e){n.asModule(t,l(e,t,i.dependencies))})}function f(e,t){return e.lastIndexOf("."+t)<=e.lastIndexOf("/")?e+"."+t:e}function l(e,t,n){return e.replace(i,"").replace(r,function(e,r,i,s){return s&&(n=n.concat(s)),n=n.map(c).join(", "),n&&(n="["+n+"], "),r+"("+c(t)+", "+n})}function c(e){return"'"+e+"'"}function h(e,t){var n=o.readFileSync(e,"utf8");n.indexOf("﻿")===0&&(n=n.substring(1)),t(n)}var e,t,n,r,i,s;n="wire",e=/(\.module|\.create|\$plugins\[\])$/,t=/(\.wire|\.spec)$/,r=/(define)\s*\(\s*(?:\s*["']([^"']*)["']\s*,)?(?:\s*\[([^\]]*)\]\s*,)?/,i=/\/\*[\s\S]*?\*\/|\/\/.*?[\n\r]/g,s={};if(require.nodeRequire)var o=require.nodeRequire("fs");return{load:u,write:a}})})(typeof define=="function"?define:function(e){module.exports=e()});
