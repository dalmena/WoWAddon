var LoadAuctionItemInformationTransaction = function (storage, itemTypeCode, query, callback) {
    this.itemTypeCode = itemTypeCode;
    this.callback = callback;
    this.storage = storage;
    this.query = query; 
}

LoadAuctionItemInformationTransaction.prototype.execute = function () {
    var that = this;
    var url = 'https://us.battle.net/wow/en/item/' +
               this.itemTypeCode +
               '/tooltip?' +
               this.query;

    var transaction = new LoadPageTransaction(url, function (newDocument) {
        var auctionInfo = new ExtractLoadedAuctionItemInformationTransaction(that.itemTypeCode, that.query, newDocument).execute();
        that.storage.set(that.itemTypeCode, auctionInfo);
        that.callback(auctionInfo);
    });

    transaction.execute();
}

unsafeWindow.LoadAuctionItemInformationTransaction = LoadAuctionItemInformationTransaction;