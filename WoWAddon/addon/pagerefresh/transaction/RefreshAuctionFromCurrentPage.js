var RefreshAuctionFromCurrentPage = function (callback) {
    this.callback = callback;
}

RefreshAuctionFromCurrentPage.prototype.execute = function () {
    var that = this;

    var refreshTransaction = new RefreshCurrentPageTransaction(function (doc) {
        var mapper = new AuctionDocumentMappingTransaction(doc, new AuctionItemMapper());
        var auctions = mapper.execute();

        for (var i = 0; i < auctions.length; i++) {
            var transaction = new RefreshAuctionItemFromAnotherDocumentTransaction(auctions[i], doc);
            transaction.execute();
        }

        that.callback();
    });

    refreshTransaction.execute();
}

unsafeWindow.RefreshAuctionFromCurrentPage = RefreshAuctionFromCurrentPage;