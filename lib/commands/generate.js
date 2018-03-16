var command={
    command: 'generate',
    description: "generate code with input_schema.json",
    run:function (options, done){
        var TaskError = require('../errors/taskerror')
        var path =  require('path');
        var Config = require("../config/Config");
        var config = Config.detect(options);
        var templete = require("tokyo-solidity-template");
        console.log("generate")
                
        if(!(config['input'] || config['i']))
        {
            return done(console.error("Cannot find input" ))
        }
        
        try{
            templete.default(options);
        }catch(err){
            console.error(err);
        }
        
    }
};


module.exports = command;