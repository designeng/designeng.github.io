define(["core/servicehub/parse/offer/dictionaries/countries"],function(e){var t;return t=function(){function t(){}return t.prototype.afterSendRequest=function(t){var n;return n=new e(t),this.dictionariesCountriesCollection.addSource(n.countries),n},t}()});
