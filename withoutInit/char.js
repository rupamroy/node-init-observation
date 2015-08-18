var person = require('./Person')({type:'express'});

module.exports= {
    getAppType : function(){
        return person.getType();
    }
}