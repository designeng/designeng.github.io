define({$plugins:["wire/on","wire/dom","wire/dom/render","core/plugin/serviceHub"],fareInfoView:{render:{template:{module:"text!components/fareinfo/layout.html"}},insert:{at:{$ref:"slot"}},on:{"click:.fareinfo__link":"onItemClick"}},fareInfoContentPattern:{module:"hbs!components/fareinfo/content"},onItemClick:{module:"components/fareinfo/onItemClick"},fareInfoController:{create:{module:"components/fareinfo/controller"},properties:{pathPatchingData:{$ref:"pathPatchingData"},serviceName:{$ref:"serviceName"},fareInfoView:{$ref:"fareInfoView"},fareInfoContentPattern:{$ref:"fareInfoContentPattern"},loaderSelector:".fareInfoContentLoader",fareInfoContentSelector:".fareInfoContentWrapper"},ready:{onReady:{}},bindToService:[{$ref:"serviceName"}]}});
