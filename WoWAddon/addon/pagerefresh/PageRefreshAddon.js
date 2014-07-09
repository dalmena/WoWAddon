var PageRefreshAddon = function () {}

PageRefreshAddon.prototype.execute = function () {
    new KeepRefreshingAuctionFromCurrentPageTransaction().execute();
}

unsafeWindow.PageRefreshAddon = PageRefreshAddon;