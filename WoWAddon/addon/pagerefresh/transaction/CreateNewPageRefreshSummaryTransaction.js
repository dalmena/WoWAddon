var CreateNewAuctionRefreshSummaryTransaction = function (summary) {
    this.summary = summary;
    this.view;
}

CreateNewAuctionRefreshSummaryTransaction.prototype.execute = function () {
    var summaryView = AuctionRefreshSummaryViewFactory.create();
    AuctionRefreshSummaryViewFactory.format(summaryView, this.summary.refreshTime);

    this.view = new CreateNewSummaryTransaction(this.summary, summaryView).execute();
    return this.view;
}

unsafeWindow.CreateNewAuctionRefreshSummaryTransaction = CreateNewAuctionRefreshSummaryTransaction;