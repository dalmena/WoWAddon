
var ThemeLessAddon = function () {
    this.themeLessStorage = new ThemeLessStorage();
    this.summaryView = null;
    this.applyVisualTransaction = null;
}

ThemeLessAddon.prototype.execute = function() {
    this.createSummary();
    this.applyVisual();
}

ThemeLessAddon.prototype.createSummary = function(){
    if (Auction.page == 'overview') {
        var that = this;

        var summary = this.getConfig();
        this.summaryView = new CreateNewThemeLessSummaryTransaction(summary).execute();
        
        ThemeLessSummaryViewFactory.onTurnChange(this.summaryView, function (isTurnedOn) {
            summary.isTurnedOn = isTurnedOn;
            that.setConfig(summary);
            that.applyVisual();
        });
    }
}

ThemeLessAddon.prototype.applyVisual = function(){
    var config = this.getConfig();

    if (config.isTurnedOn && this.applyVisualTransaction == null)
        this.applyVisualTransaction = new ApplyThemeLessTransaction();

    if (this.applyVisualTransaction != null) {
        if (config.isTurnedOn)
            this.applyVisualTransaction.execute();
        else 
            this.applyVisualTransaction.reverse();
    }
}

ThemeLessAddon.prototype.getConfig = function () {
    return this.themeLessStorage.get('map', new ThemeLessSummaryData('Theme Less Addon', false));
}

ThemeLessAddon.prototype.setConfig = function (config) {
    return this.themeLessStorage.set('map', config);
}

unsafeWindow.ThemeLessAddon = ThemeLessAddon;