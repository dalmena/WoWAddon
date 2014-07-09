var LoadPageTransaction = function (url, callback) {
    this.url = url;
    this.callback = callback;
}

LoadPageTransaction.prototype.execute = function () {
    var that = this;

    var response = $.ajax(this.url).done(function () {
        var doc = response.responseXML;
        that.callback(doc);
    });
}

unsafeWindow.LoadPageTransaction = LoadPageTransaction;