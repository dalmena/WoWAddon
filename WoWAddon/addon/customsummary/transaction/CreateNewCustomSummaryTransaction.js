var CreateNewCustomSummaryTransaction = function (summary) {
    this.summary = summary;
}

CreateNewCustomSummaryTransaction.prototype.execute = function () {
    var panel = new CustomSummaryPanel();
    panel.SetSummary(this.summary);

    $('.auction-house.overview').append(panel.view);
}

unsafeWindow.CreateNewCustomSummaryTransaction = CreateNewCustomSummaryTransaction;

