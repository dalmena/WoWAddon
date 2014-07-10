var KeepRefreshingAuctionFromCurrentPageTransaction = function (summaryStorage) {
    this.summaryStorage = summaryStorage;

    var that = this;

    this.refreshCurrentAuctionsTransaction = new RefreshAuctionFromCurrentPageTransaction(function () {
        that.keepRefreshing();
    });
}

KeepRefreshingAuctionFromCurrentPageTransaction.prototype.execute = function () {
    this.keepRefreshing();
}

KeepRefreshingAuctionFromCurrentPageTransaction.prototype.keepRefreshing = function () {
    var that = this;
    var refreshTime = this.summaryStorage.get('summary').refreshTime;

    setTimeout(function () {
        that.refreshCurrentAuctionsTransaction.execute();
        AuctionRefreshEvents.fire(AuctionRefreshEvents.onRefresh);
    }, refreshTime);
}

unsafeWindow.KeepRefreshingAuctionFromCurrentPageTransaction = KeepRefreshingAuctionFromCurrentPageTransaction;