var CreateRefreshUnitPriceEventTransaction = function (stackView, moneyView, unitMoneyView) {
    this.stackView = stackView;
    this.moneyView = moneyView;
    this.moneyViewEvent = null;

    this.unitMoneyView = unitMoneyView;
    this.unitMoneyViewEvent = null;
}

CreateRefreshUnitPriceEventTransaction.prototype.execute = function () {
    var that = this;

    this.moneyViewEvent = $('input', this.moneyView).keydown(function () {
        setTimeout(function () {
            that.refreshUnitViewValues(); 
        }, 100);
    });

    this.unitMoneyViewEvent = $('input', this.unitMoneyView).keydown(function () {
        setTimeout(function () {
            that.refreshTotalViewValues();
        }, 100);
    });
}

CreateRefreshUnitPriceEventTransaction.prototype.reverse = function () {
}

CreateRefreshUnitPriceEventTransaction.prototype.refreshTotalViewValues = function () {
    var stacks = this.stackView.val();
    var unitValue = UnitPriceViewFactory.getValue(this.unitMoneyView);
    var totalValue = unitValue * stacks;

    var totalValueInCoin = Auction.formatMoney(totalValue);
    
    UnitPriceViewFactory.format(this.moneyView, totalValueInCoin.gold, totalValueInCoin.silver, totalValueInCoin.copper);
}

CreateRefreshUnitPriceEventTransaction.prototype.refreshUnitViewValues = function () {
    var stacks = this.stackView.val();
    var total = UnitPriceViewFactory.getValue(this.moneyView);
    var unitValue = total / stacks;

    var unitValueInCoin = Auction.formatMoney(unitValue);

    UnitPriceViewFactory.format(this.unitMoneyView, unitValueInCoin.gold, unitValueInCoin.silver, unitValueInCoin.copper);
}

unsafeWindow.CreateRefreshUnitPriceEventTransaction = CreateRefreshUnitPriceEventTransaction;
