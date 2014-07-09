var KeepRefreshingAuctionFromCurrentPageTransaction = function () {
    var that = this;

    this.refreshCurrentAuctionsTransaction = new RefreshAuctionFromCurrentPage(function () {
        that.keepRefreshing();
    });

    this.refreshDelay = 10000;
}

KeepRefreshingAuctionFromCurrentPageTransaction.prototype.execute = function () {
    this.keepRefreshing();
}

KeepRefreshingAuctionFromCurrentPageTransaction.prototype.keepRefreshing = function () {
    var that = this;

    setTimeout(function () {
        that.refreshCurrentAuctionsTransaction.execute();
    }, this.refreshDelay);
}

unsafeWindow.KeepRefreshingAuctionFromCurrentPageTransaction = KeepRefreshingAuctionFromCurrentPageTransaction;