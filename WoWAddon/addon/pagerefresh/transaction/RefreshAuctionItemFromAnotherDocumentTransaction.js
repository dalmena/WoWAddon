var RefreshAuctionItemFromAnotherDocumentTransaction = function (newAuctionItem, newDocument) {
    this.newAuctionItem = newAuctionItem;
    this.newDocument = newDocument;
}

RefreshAuctionItemFromAnotherDocumentTransaction.prototype.execute = function () {
    var code = this.newAuctionItem.code;
    var category = this.newAuctionItem.category;

    var oldAuctionDOM = $('tr[id*="auction-' + code + '"]').filter(function () {        
        var container = $(this).parent().parent().parent().parent();
        return container.attr('id') == category || container.attr('class') == category;
    });
    
    var newAuctionDOM = $('tr[id*="auction-' + code + '"]', this.newDocument).filter(function () {
        var container = $(this).parent().parent().parent().parent();
        return container.attr('id') == category || container.attr('class') == category;
    });

    if (oldAuctionDOM.length > 0 && newAuctionDOM.length > 0) {
        newAuctionDOM.css('display', oldAuctionDOM.css('display'));
        oldAuctionDOM.replaceWith(newAuctionDOM);
        console.log('refreshed (replace)' + code);
    }
    else if (newAuctionDOM.length > 0) {
        var container = $('#' + category);

        if (container.length == 0) {
            container = $('.' + category.replace(' ', '.'));
        }

        container.find('.table tbody').append(newAuctionDOM);

        console.log('refreshed (append)' + code);
    }

}

unsafeWindow.RefreshAuctionItemFromAnotherDocumentTransaction = RefreshAuctionItemFromAnotherDocumentTransaction;