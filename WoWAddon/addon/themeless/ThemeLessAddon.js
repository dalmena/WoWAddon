
var ThemeLessAddon = function () {
    this.storage = new ThemeLessStorage();
    this.applyVisualTransaction = null;
    this.setupDefaultSettings();
}

ThemeLessAddon.prototype.execute = function() {
    this.createSummary();
    this.applyVisual();
}

ThemeLessAddon.prototype.createSummary = function(){
    if (Auction.page == 'overview') {
        var that = this;
        var summary = new CreateNewThemeLessSummaryTransaction(this.storage).execute();
        
        summary.onChange('turn', function (isTurnedOn) {
            that.applyVisual();
        });
    }
}

ThemeLessAddon.prototype.applyVisual = function(){
    var storedSummary = this.storage.get('summary');

    if (storedSummary.isTurnedOn && this.applyVisualTransaction == null)
        this.applyVisualTransaction = new ApplyThemeLessTransaction();

    if (this.applyVisualTransaction != null) {
        if (storedSummary.isTurnedOn)
            this.applyVisualTransaction.execute();
        else 
            this.applyVisualTransaction.reverse();
    }
}

ThemeLessAddon.prototype.setupDefaultSettings = function () {
    var storedSummary = this.storage.get('summary');

    if (storedSummary == null)
        this.storage.set('summary', new ThemeLessSummaryData('Theme Less Addon', false));
}

unsafeWindow.ThemeLessAddon = ThemeLessAddon;