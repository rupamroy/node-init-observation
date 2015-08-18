var person = require('./Person');
person.init({type: 'express'});

module.exports= {
    getAppType : function(){
        return person.getType();
    }
}