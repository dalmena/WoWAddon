var SearchAllFilterTransaction = function (storage) {
    this.storage = storage;
}

SearchAllFilterTransaction.prototype.refresh = function () {
    console.log("refreshing: " + $('#smartFilterApplyCheckBox').is(':checked'));
    if ($('#smartFilterApplyCheckBox').is(':checked')) {
        this.execute();
    }
}

SearchAllFilterTransaction.prototype.execute = function () {

    var minRatio = $('#smartPriceDiff').val();
    this.storage.set('search-all-filter', new SearchAllFilter(minRatio));

    var allAuctionViews = new AuctionMappingTransaction(new SearchAllMapper()).execute();

    //console.log(allAuctionViews);

    for (var i = 0; i < allAuctionViews.length; i++) {

        var view = allAuctionViews[i];

        var transaction = new RetrieveAuctionItemInformationTransaction(view.itemTypeCode, view.query, function (auctionInfo) {
            //console.log(auctionInfo);
            if (auctionInfo.sellPrice.money > view.buyout && view.buyout > 0) {
                //console.log(auctionInfo);
                //console.log(view);
                $('#auction-' + view.code + ' td').css("background-color", "#000033");
            }
            else if (auctionInfo.sellPrice.money > view.bid && view.bid > 0) {
                $('#auction-' + view.code + ' td').css("background-color", "#003333");
            }
        });

        transaction.execute();

        // reset data
        $('#auction-' + view.code).css("display", "table-row");

        if (view.ratioBidBuyout > minRatio) {
            $('#auction-' + view.code).css("display", "none");
        }
    }
}

SearchAllFilterTransaction.prototype.reverse = function () {
    var allAuctionViews = new AuctionMappingTransaction(new SearchAllMapper()).execute();

    for (var i = 0; i < allAuctionViews.length; i++) {
        var view = allAuctionViews[i];
        $('#auction-' + view.code).css("display", "table-row");
    }

}

unsafeWindow.SearchAllFilterTransaction = SearchAllFilterTransaction;