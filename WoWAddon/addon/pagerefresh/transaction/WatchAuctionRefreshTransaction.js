var WatchAuctionRefreshTransaction = function (callback) {
    this.callback = callback;
}

WatchAuctionRefreshTransaction.prototype.execute = function () {
    AuctionRefreshEvents.onRefresh.push(this.callback);
}

unsafeWindow.WatchAuctionRefreshTransaction = WatchAuctionRefreshTransaction;