var CreateNewPageRefreshSummaryTransaction = function (summary) {
    this.summary = summary;
    this.view;
}

CreateNewPageRefreshSummaryTransaction.prototype.execute = function () {
    var summaryView = PageRefreshSummaryViewFactory.create();
    PageRefreshSummaryViewFactory.format(summaryView, this.summary.refreshTime);

    this.view = new CreateNewSummaryTransaction(this.summary, summaryView).execute();
    return this.view;
}

unsafeWindow.CreateNewPageRefreshSummaryTransaction = CreateNewPageRefreshSummaryTransaction;