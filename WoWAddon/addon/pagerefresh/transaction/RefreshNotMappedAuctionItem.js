var RefreshNotMappedAuctionItem = function (oldAuctionItem, newDocument) {
    this.oldAuctionItem = oldAuctionItem;
    this.newDocument = newDocument;
}

RefreshNotMappedAuctionItem.prototype.execute = function () {
    var code = this.oldAuctionItem.code;
    var category = this.oldAuctionItem.category;

    var oldAuctionDOM = $('tr[id*="auction-' + code + '"]').filter(function () {
        var container = $(this).parent().parent().parent().parent();
        return container.attr('id') == category || container.attr('class') == category;
    });

    var newAuctionDOM = $('tr[id*="auction-' + code + '"]', this.newDocument).filter(function () {
        var container = $(this).parent().parent().parent().parent();
        return container.attr('id') == category || container.attr('class') == category;
    });

    if (oldAuctionDOM.length > 0 && newAuctionDOM.length == 0) {
        oldAuctionDOM.remove();
        console.log('refreshed (removed)' + code);
    }
}

unsafeWindow.RefreshNotMappedAuctionItem = RefreshNotMappedAuctionItem;