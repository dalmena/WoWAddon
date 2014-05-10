var CreateNewThemeLessSummaryTransaction = function (summary) {
    this.summary = summary;
    this.view 
}

CreateNewThemeLessSummaryTransaction.prototype.execute = function () {
    var summaryView = ThemeLessSummaryViewFactory.create();
    ThemeLessSummaryViewFactory.format(summaryView, this.summary.isTurnedOn);

    var defaultSummaryView = new CreateNewSummaryTransaction(this.summary, summaryView).execute();

    this.view = defaultSummaryView;

    return this.view;
}

unsafeWindow.CreateNewThemeLessSummaryTransaction = CreateNewThemeLessSummaryTransaction;