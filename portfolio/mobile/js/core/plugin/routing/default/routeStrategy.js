define(["underscore"],function(e){var t,n,r,i,s,o,u;return s=null,i=function(e){return e.split("/")},u=function(t){return e.initial(t)},n=function(t,r,i){var o,a;return i===1?t:(o=e.where(s[i],{route:t,base:!0})[0],o!=null?o.route:(a=u(r),n(a.join("/"),a,a.length)))},o=function(t,n){var r,i;return r=n[0],i=n[1],e.isUndefined(r)?t*0:r.match("\\{(.*)}")&&!e.isUndefined(i)?t*1:r!==i?t*0:t*1},r=function(){return this.appRouterController.getCurrentRoute()},t=function(){function t(e){e!=null&&(this.childRoutes=e.childRoutes,this.groundRoutes=e.groundRoutes)}return t.prototype.groupByLength=function(){return e.groupBy(e.keys(this.childRoutes),function(e){return i(e).length})},t.prototype.getComponentRoute=function(t){return e.findKey(this.childRoutes,function(e){return e.spec===t})},t.prototype.getBaseRoute=function(t){var r,o,u;return s==null&&(u=e.keys(this.childRoutes),s=e.reduce(u,function(e){return function(t,n,r){var s,o;return o=i(n).length,t[o]==null&&(t[o]=[]),s={route:n},e.childRoutes[n].base&&(s.base=!0),t[o].push(s),t}}(this),{})),o=i(t),r=n(t,o,o.length),r},t.prototype.getChild=function(t){var n,i,s,u,a,f,l,c,h;f=r.call(this).params,i=e.keys(this.childRoutes);for(c=0,h=i.length;c<h;c++){a=i[c],s=a.split("/"),l=e.zip(s,f),u=e.reduce(l,o,1);if(u)return n=this.childRoutes[a],n.route=a,n.params=f,n}return void 0},t}()});
