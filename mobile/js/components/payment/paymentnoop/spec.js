define({$plugins:["wire/on","wire/dom","wire/dom/render","core/plugin/template/hb"],d3examplePattern:{module:"text!components/payment/paymentnoop/d3example.html"},paymentNoopPattern:{module:"hbs!components/payment/paymentnoop/template"},paymentNoopTemplate:{templateSource:{pattern:{$ref:"paymentNoopPattern"},fillWith:{header:"Here's mocking redirection to payment system"}}},paymentNoopView:{render:{template:{$ref:"paymentNoopTemplate"}},insert:{at:{$ref:"slot"}}},controller:{create:"components/payment/paymentnoop/controller",ready:{onReady:{}},properties:{paymentNoopView:{$ref:"paymentNoopView"}}}});
