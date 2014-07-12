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

    for (var i = 0; i < allAuctionViews.length; i++) {
        var view = allAuctionViews[i];

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