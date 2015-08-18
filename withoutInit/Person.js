module.exports = function (app) {
    return {
        test: '12345',
        getType: getType
    };

    function getType() {
        return app.type;
    }
};

