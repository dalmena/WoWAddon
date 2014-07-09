var RefreshAuctionItemFromAnotherDocumentTransaction = function (auctionItem, doc) {
    this.auctionItem = auctionItem;
    this.doc = doc;
}

RefreshAuctionItemFromAnotherDocumentTransaction.prototype.execute = function () {
    var code = this.auctionItem.code;
    var oldAuctionDOM = $('tr[id*="auction-' + code + '"]');
    var newAuctionDOM = $('tr[id*="auction-' + code + '"]', this.doc);

    if (oldAuctionDOM.length > 0 && newAuctionDOM.length > 0) {
        oldAuctionDOM.replaceWith(newAuctionDOM);
    }
    else if (newAuctionDOM.length > 0) {
        var container = newAuctionDOM.parent().parent().parent().parent();
        container.find('.table tbody').append(newAuctionDOM);
    }

    console.log('refreshed ' + code);
}

unsafeWindow.RefreshAuctionItemFromAnotherDocumentTransaction = RefreshAuctionItemFromAnotherDocumentTransaction;