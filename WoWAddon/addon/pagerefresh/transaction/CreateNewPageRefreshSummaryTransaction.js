var CreateNewAuctionRefreshSummaryTransaction = function (storage) {
    this.storage = storage;
}

CreateNewAuctionRefreshSummaryTransaction.prototype.execute = function () {
    var storage = this.storage;
    var data = storage.get('summary');

    var summary = new CustomSummary();

    summary.setTitle('Auction Refresh Addon')
           .addField('refresh-time', 'Refresh Delay', new CustomSummaryTextField(data.refreshTime, 'miliseconds'))
           .onChange('refresh-time', function (value) {
               data.refreshTime = value;
               storage.set('summary', data); 
           });

    new CreateNewCustomSummaryTransaction(summary).execute();
}

unsafeWindow.CreateNewAuctionRefreshSummaryTransaction = CreateNewAuctionRefreshSummaryTransaction;