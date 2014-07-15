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
        new CreateNewAuctionRefreshSummaryTransaction(this.summaryStorage).execute();
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