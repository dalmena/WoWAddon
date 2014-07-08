var SearchAllAddon = function () {}

SearchAllAddon.prototype.execute = function () {
    if (Auction.page == 'browse') {
        AuctionBrowse.perPage = 200;
        new SearchAllAppendFormTransaction().execute();
    }
}

unsafeWindow.SearchAllAddon = SearchAllAddon;