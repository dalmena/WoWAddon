var CreateNewSummaryTransaction = function (summary, summaryView) {
    this.summary = summary;
    this.summaryView = summaryView;
    this.view = null;
}

CreateNewSummaryTransaction.prototype.execute = function () {
    this.createView();
    this.populateAuctionSummary();
    return this.view;
}

CreateNewSummaryTransaction.prototype.createView = function () {
    this.view = SummaryViewFactory.create();
    SummaryViewFactory.format(this.view, this.summary.title);
    SummaryViewFactory.append(this.view, this.summaryView);
}

CreateNewSummaryTransaction.prototype.populateAuctionSummary = function () {
    $('.auction-house.overview').append(this.view);
}

unsafeWindow.CreateNewSummaryTransaction = CreateNewSummaryTransaction;

