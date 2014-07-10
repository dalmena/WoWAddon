var AuctionRefreshAddon = function () {
    this.summaryStorage = new AuctionRefreshStorage();
    this.summaryView = null;
}

AuctionRefreshAddon.prototype.execute = function () {
    this.setupDefaultConfig();
    this.createSummary();
    this.keepRefreshing();
}

AuctionRefreshAddon.prototype.createSummary = function () {
    if (Auction.page == 'overview') {
        var that = this;

        var summary = this.summaryStorage.get('summary');
        this.summaryView = new CreateNewAuctionRefreshSummaryTransaction(summary).execute();
        
        AuctionRefreshSummaryViewFactory.onDelayChange(this.summaryView, function (refreshTime) {
            summary.refreshTime = refreshTime;
            that.summaryStorage.set('summary', summary);
        });
    }
}

AuctionRefreshAddon.prototype.keepRefreshing = function () {
    new KeepRefreshingAuctionFromCurrentPageTransaction(this.summaryStorage).execute();
}

AuctionRefreshAddon.prototype.setupDefaultConfig = function (config) {
    var config = this.summaryStorage.get('summary', null);

    if (config == null) {
        this.summaryStorage.set('summary', new AuctionRefreshSummaryData('Auction Refresh Addon', 60000));
    }
}

unsafeWindow.AuctionRefreshAddon = AuctionRefreshAddon;