var RefreshAuctionFromCurrentPageTransaction = function (callback) {
    this.callback = callback;
}

RefreshAuctionFromCurrentPageTransaction.prototype.execute = function () {
    var that = this;

    var refreshTransaction = new RefreshCurrentPageTransaction(function (newDocument) {
        var mappingTransaction = new AuctionDocumentMappingTransaction(newDocument, new AuctionItemMapper());
        var newAuctions = mappingTransaction.execute();

        var oldMappingTransaction = new AuctionMappingTransaction(new AuctionItemMapper());
        var oldAuctions = oldMappingTransaction.execute();

        for (var i = 0; i < oldAuctions.length; i++) {
            var transaction = new RefreshNotMappedAuctionItem(oldAuctions[i], newDocument);
            transaction.execute();
        }

        for (var i = 0; i < newAuctions.length; i++) {
            var transaction = new RefreshAuctionItemFromAnotherDocumentTransaction(newAuctions[i], newDocument);
            transaction.execute();
        }
        
        that.callback();
    });

    refreshTransaction.execute();
}

unsafeWindow.RefreshAuctionFromCurrentPageTransaction = RefreshAuctionFromCurrentPageTransaction;