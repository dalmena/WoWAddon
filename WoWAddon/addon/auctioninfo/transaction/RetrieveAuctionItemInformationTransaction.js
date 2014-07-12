var RetrieveAuctionItemInformationTransaction = function (itemTypeCode, query, callback) {
    this.itemTypeCode = itemTypeCode;
    this.query = query;
    this.callback = callback;
    this.storage = new AuctionInfoStorage();
}

RetrieveAuctionItemInformationTransaction.prototype.execute = function () {
    var that = this;
    var storedAuctionInfo = this.storage.get(this.itemTypeCode);

    if (storedAuctionInfo != null) {
        this.callback(storedAuctionInfo);
        return storedAuctionInfo;
    }
    
    var transaction = new LoadAuctionItemInformationTransaction(this.storage, this.itemTypeCode, this.query, function (auctionInfo) {
        that.callback(auctionInfo);
    });

    transaction.execute();
    return null;
}

unsafeWindow.RetrieveAuctionItemInformationTransaction = RetrieveAuctionItemInformationTransaction;