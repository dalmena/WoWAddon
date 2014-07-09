var PageRefreshAddon = function () {
    this.summaryStorage = new PageRefreshStorage();
    this.summaryView = null;
}

PageRefreshAddon.prototype.execute = function () {
    this.setupDefaultConfig();
    this.createSummary();
    this.keepRefreshing();
}

PageRefreshAddon.prototype.createSummary = function () {
    if (Auction.page == 'overview') {
        var that = this;

        var summary = this.summaryStorage.get('summary');
        this.summaryView = new CreateNewPageRefreshSummaryTransaction(summary).execute();
        
        PageRefreshSummaryViewFactory.onDelayChange(this.summaryView, function (refreshTime) {
            summary.refreshTime = refreshTime;
            that.summaryStorage.set('summary', summary);
        });
    }
}

PageRefreshAddon.prototype.keepRefreshing = function () {
    new KeepRefreshingAuctionFromCurrentPageTransaction(this.summaryStorage).execute();
}

PageRefreshAddon.prototype.setupDefaultConfig = function (config) {
    var config = this.summaryStorage.get('summary', null);

    if (config == null) {
        this.summaryStorage.set('summary', new PageRefreshSummaryData('Page Refresh Addon', 60000));
    }
}

unsafeWindow.PageRefreshAddon = PageRefreshAddon;