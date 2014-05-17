var CreateUnitPriceForSellTransaction = function () {
    this.startingPriceView = null;
    this.startingUnitPriceView = null;
    this.buyoutPriceView = null;
    this.buyoutUnitPriceView = null;
    this.startingPriceTransaction = null;
    this.buyoutPriceTransaction = null;
}

CreateUnitPriceForSellTransaction.prototype.execute = function () {
    this.setUpViews();
    this.addViewsEvents();
    this.replaceAuctionCreateEvents();
}


CreateUnitPriceForSellTransaction.prototype.reverse = function () {

}

CreateUnitPriceForSellTransaction.prototype.setUpViews = function () {
    var table = $('#create-step2 table');

    this.stackView = $('#form-quantity', table);

    this.startingPriceView = $('#form-startMoney', table).parent();
    this.buyoutPriceView = $('#form-buyoutMoney', table).parent();

    this.startingUnitPriceView = UnitPriceViewFactory.create('Starting Unit Price', 'startUnit');
    this.buyoutUnitPriceView = UnitPriceViewFactory.create('Buyout Unit Price', 'buyoutUnit');

    this.startingUnitPriceView.insertAfter(this.startingPriceView);
    this.buyoutUnitPriceView.insertAfter(this.buyoutPriceView);
}


CreateUnitPriceForSellTransaction.prototype.addViewsEvents = function () {
    this.startingPriceTransaction = new CreateRefreshUnitPriceEventTransaction(this.stackView, this.startingPriceView, this.startingUnitPriceView);
    this.buyoutPriceTransaction = new CreateRefreshUnitPriceEventTransaction(this.stackView, this.buyoutPriceView, this.buyoutUnitPriceView);

    this.startingPriceTransaction.execute();
    this.buyoutPriceTransaction.execute();
}


CreateUnitPriceForSellTransaction.prototype.replaceAuctionCreateEvents = function () {
    var that = this;

    var transaction = new ChangeResetFormForCreateAuction(function (enabled) {
        transaction.callOldEvent(enabled);

        setTimeout(function () {
            that.startingPriceTransaction.refreshUnitViewValues();
            that.buyoutPriceTransaction.refreshUnitViewValues();
        }, 100);
    });

    transaction.execute();
}

unsafeWindow.CreateUnitPriceForSellTransaction = CreateUnitPriceForSellTransaction;