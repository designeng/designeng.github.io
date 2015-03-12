/*Yandex.Metrika counter*/
var yaParams = {/*Здесь параметры визита*/};
(function(d, w, c){
    (w[c] = w[c] || []).push(function(){
        try {
            w.yaCounter12735853 = new Ya.Metrika({
                id: 12735853,
                enableAll: true,
                ut: "noindex",
                webvisor: true,
                params: window.yaParams || {}
            });
        } catch (e) {
        }
    });
    var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function(){
        n.parentNode.insertBefore(s, n);
    };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f);
    } else {
        f();
    }
})(document, window, "yandex_metrika_callbacks");
/*/Yandex.Metrika counter*/
/*Rating@Mail.ru counter*/
var _tmr = _tmr || [];
_tmr.push({
    id: "1963905",
    type: "pageView",
    start: (new Date()).getTime()
});
(function(d, w){
    var ts = d.createElement("script");
    ts.type = "text/javascript";
    ts.async = true;
    ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
    var f = function(){
        var s = d.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ts, s);
    };
    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window);
/*/Rating@Mail.ru counter*/
/*Heap Analytics counter*/
window.heap = window.heap || [];
window.heap.load = function(a){
    window._heapid = a;
    var b = document.createElement("script");
    b.type = "text/javascript", b.async = !0, b.src = ("https:" === document.location.protocol ? "https:" : "http:") + "//d36lvucg9kzous.cloudfront.net";
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(b, c);
    var d = function(a){
        return function(){
            window.heap.push([a].concat(Array.prototype.slice.call(arguments, 0)))
        }
    }, e = ["identify", "track"];
    for (var f = 0; f < e.length; f++) 
        window.heap[e[f]] = d(e[f])
};
window.heap.load("3093444877");
/*/Heap Analytics counter*/
