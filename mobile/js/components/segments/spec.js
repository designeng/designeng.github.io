define({$plugins:["wire/dom","wire/dom/render","core/plugin/template/hb"],specMainView:{render:{template:{$ref:"specHTML"}},insert:{at:{$ref:"slot"}}},specHTML:{templateSource:{pattern:{$ref:"specTemplate"},fillWith:{$ref:"specModel"}}},specTemplate:{module:"hbs!components/segments/template"},specModel:{create:{module:"components/segments/model",args:[{$ref:"serviceResponse"}]}}});
