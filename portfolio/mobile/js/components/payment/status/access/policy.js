define(["underscore","core/util/order/orderHistory","core/plugin/routing/assets/appRouterController"],function(e,t,n){var r;return r=function(){function e(){}return e.prototype.onReady=function(){var e,r;return r=n.getCurrentRoute().params,e=r.pop(),this.cpid=r.pop(),t.updateOrder(this.cpid,{paymentStatus:e})},e.prototype.checkAccess=function(){return!1},e.prototype.getRedirect=function(){return"/order/info/"+this.cpid},e}()});
