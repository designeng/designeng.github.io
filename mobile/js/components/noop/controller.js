define(["core/servicehub/parse/packresponse/index","core/util/order/orderHistory","core/util/navigation/navigate"],function(e,t,n){var r;return r=function(){function r(){}return r.prototype.afterSendRequest=function(r){var i;return i=new e(r),t.registerOrder({cpid:122254941,response:i}),setTimeout(function(e){return function(){var e;return e=122254941,n("/order/info/"+e)}}(this),1e3)},r}()});
