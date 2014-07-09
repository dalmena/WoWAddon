var RefreshCurrentPageTransaction = function (callback) {
    this.callback = callback;
}

RefreshCurrentPageTransaction.prototype.execute = function () {
    var that = this;
    var currentPage = location.href;

    var loadPageTransaction = new LoadPageTransaction(currentPage, function (doc) {
        that.callback(doc);
    });

    loadPageTransaction.execute();
}

unsafeWindow.RefreshCurrentPageTransaction = RefreshCurrentPageTransaction;