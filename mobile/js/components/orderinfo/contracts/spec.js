define({$plugins:["wire/on","wire/dom","wire/dom/render","core/plugin/template/hb"],contractsView:{render:{template:{$ref:"contractsViewTemplate"}},insert:{at:{$ref:"dom.first!.contracts",at:"specMainView"}}},contractsViewTemplate:{templateSource:{pattern:{$ref:"contractsTemplate"},fillWith:{$ref:"contractsModel"}}},contractsTemplate:{module:"hbs!components/orderinfo/contracts/template"},contractsModel:{create:{module:"components/orderinfo/contracts/model",args:[{$ref:"packResponse"},{$ref:"__environmentVars.route"}]}},controller:{create:"components/orderinfo/contracts/controller",properties:{preloader:{$ref:"preloader"},contractsModel:{$ref:"contractsModel"}},ready:{onReady:{}}}});
