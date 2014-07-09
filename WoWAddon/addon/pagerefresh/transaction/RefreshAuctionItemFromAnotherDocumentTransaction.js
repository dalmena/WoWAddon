var RefreshAuctionItemFromAnotherDocumentTransaction = function (newAuctionItem, newDocument) {
    this.newAuctionItem = newAuctionItem;
    this.newDocument = newDocument;
}

RefreshAuctionItemFromAnotherDocumentTransaction.prototype.execute = function () {
    var code = this.newAuctionItem.code;
    var category = this.newAuctionItem.category;

    var oldAuctionDOM = $('tr[id*="auction-' + code + '"]').filter(function () {        
        return $(this).parent().parent().parent().parent().attr('id') == category;
    });
    
    var newAuctionDOM = $('tr[id*="auction-' + code + '"]', this.newDocument).filter(function () {
        return $(this).parent().parent().parent().parent().attr('id') == category;
    });

    if (oldAuctionDOM.length > 0 && newAuctionDOM.length > 0) {
        oldAuctionDOM.replaceWith(newAuctionDOM);
        console.log('refreshed (replace)' + code);
    }
    else if (newAuctionDOM.length > 0) {
        var container = $('.' + category);

        if (container.length == 0) {
            container = $('#' + category);
        }

        container.find('.table tbody').append(newAuctionDOM);

        console.log('refreshed (append)' + code);
    }

}

unsafeWindow.RefreshAuctionItemFromAnotherDocumentTransaction = RefreshAuctionItemFromAnotherDocumentTransaction;