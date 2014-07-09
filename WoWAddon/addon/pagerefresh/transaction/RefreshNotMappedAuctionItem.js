var RefreshNotMappedAuctionItem = function (oldAuctionItem, newDocument) {
    this.oldAuctionItem = oldAuctionItem;
    this.newDocument = newDocument;
}

RefreshNotMappedAuctionItem.prototype.execute = function () {
    var code = this.oldAuctionItem.code;
    var category = this.oldAuctionItem.category;

    var oldAuctionDOM = $('tr[id*="auction-' + code + '"]').filter(function () {
        return $(this).parent().parent().parent().parent().attr('id') == category;
    });

    var newAuctionDOM = $('tr[id*="auction-' + code + '"]', this.newDocument).filter(function () {
        return $(this).parent().parent().parent().parent().attr('id') == category;
    });

    if (oldAuctionDOM.length > 0 && newAuctionDOM.length == 0) {
        oldAuctionDOM.remove();
        console.log('refreshed (removed)' + code);
    }
}

unsafeWindow.RefreshNotMappedAuctionItem = RefreshNotMappedAuctionItem;