define({$plugins:["core/plugin/serviceHub"],longInterval:6e4,shortInterval:1e4,stateChecker:{create:{module:"components/orderinfo/stateChecker/controller"},properties:{cpid:{$ref:"cpid"},intervalConfig:[{state:"WAITING_FOR_AIRCOMPANY_CONFIRMATION",interval:{$ref:"longInterval"}},{state:"WAITING_FOR_PAY",interval:{$ref:"longInterval"}},{state:"WAITING_FOR_PAY",interval:{$ref:"longInterval"},paymentStatus:"paymentFail"},{state:"WAITING_FOR_PAY",interval:{$ref:"shortInterval"},paymentStatus:"paymentOk"},{state:"TICKETING",interval:{$ref:"shortInterval"}},{state:"TICKETING",interval:{$ref:"shortInterval"},paymentStatus:"paymentFail"},{state:"TICKETING",interval:{$ref:"shortInterval"},paymentStatus:"paymentOk"},{state:"VOIDING",interval:{$ref:"longInterval"}}]},bindToService:["packResponseServiceState"],ready:{initChecking:{$ref:"packResponse"}}}});
