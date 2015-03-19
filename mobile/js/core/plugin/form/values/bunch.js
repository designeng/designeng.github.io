define(["underscore","jquery","when","meld","wire/lib/object","kefir","kefirJquery","eventEmitter"],function(e,t,n,r,i,s,o,u){return o.init(s,t),function(o){var a,f,l,c,h,p,d,v;return p=[],c=function(e){return e&&i.hasOwn(e,"$ref")},l=function(e){return e.split(".").slice(0,2)},a=function(e,t,n){var i,o,a,f;if(!c(e))throw new Error("Should be described as wire reference!");return f=l(e.$ref),o=f[0],i=f[1],a={provider:{$ref:o},method:e},n(a).then(function(e){var n;return e.provider.emitter==null&&(e.provider.emitter=new u),n=i+"Event",t.push(s.fromEvent(e.provider.emitter,n)),p.push(r.after(e.provider,i,function(t){return e.provider.emitter.emit(n,t)}))})},f=function(t,n){var r;return r=[],e.each(t,function(e){return a(e,r,n)}),r},d=function(n,r,i){var o,u,a,l;return u=[],l=r.target,o=t(l),a=f(r.options.byInvocations,i),i(r.options).then(function(t){var r,i;r=t.deliverTo;if(e.isPlainObject(r))i=function(t){return r=e.extend(r,t)};else{if(!e.isFunction(r))throw new Error("Option 'deliverTo' should be function or plain js object!");i=r}return e.each(t.byFields,function(e){var t;return u[e]=o.find("[name='"+e+"']"),t=function(e){return function(){var t;return t={name:e,value:u[e].val()},t}}(e),a[e]=u[e].asKefirStream("change",t)}),s.merge(e.values(a)).onValue(i),n.resolve()})},v=function(r,i,s){var o,u,a,f,l;u=[],f=[],l=i.target,o=t(l);if(!e.isArray(i.options))throw new Error("ValuesSeparately facet value should be Array!");return a=["field","consumer"],e.each(i.options,function(t){var r,i;e.each(a,function(e){if(!this.hasOwnProperty(e))throw new Error("ValuesSeparately facet item should have '"+e+"' attribute!")},t);if(!e.isString(t.field))throw new Error("ValuesSeparately facet item 'field' should be a string!");return u[t.field]=o.find("[name='"+t.field+"']"),i=function(e){return function(){var t;return t={name:e,value:u[e].val()},t}}(t.field),r=n.defer(),s({$ref:t.consumer}).then(function(e){return r.resolve(e)}),f[t.field]=u[t.field].asKefirStream("change",i).onValue(function(e){return n(r.promise).then(function(t){return t(e)})})}),r.resolve()},h={facets:{valuesBunch:{ready:d},valuesSeparately:{ready:v}}},h}});
