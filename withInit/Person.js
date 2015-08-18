var app;

function init(server) {
    app = server;
}

function getType() {
    return app.type;
}

module.exports = {
    test: '12345',
    getType: getType,
    init: init
};
