var CustomSummaryPanel = function () {
    this.setupView();
}

CustomSummaryPanel.prototype.setupView = function () {
    this.view = $('<div>').attr('class', 'activity');
    this.viewTitle = $('<h3>').attr('class', 'subheader');
    this.view.append(this.viewTitle);
}

CustomSummaryPanel.prototype.SetSummary = function (summary) {
    this.viewTitle.text(summary.title);
     
    var layout = new CustomSummaryLayout(summary);
    this.view.append(layout.view);
}

unsafeWindow.CustomSummaryPanel = CustomSummaryPanel;