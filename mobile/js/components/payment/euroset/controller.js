define(["underscore","core/servicehub/serviceMap","core/util/rest/patchPath","core/util/common/format"],function(e,t,n,r){var i;return i=function(){function t(){e.bindAll(this,"getPaymentCode","getPaymentPrice","getPaymentPrefix","barcodeSource")}return t.prototype.getPaymentCode=function(){return this.eurosetPaymentCase.paymentCode.code},t.prototype.getPaymentPrefix=function(){return this.eurosetPaymentCase.paymentCode.prefix},t.prototype.getPaymentPrice=function(){return r.money(this.eurosetPaymentCase.total)},t.prototype.barcodeSource=function(){return"js/core/servicehub/mock/barCode.jpg"},t}()});
