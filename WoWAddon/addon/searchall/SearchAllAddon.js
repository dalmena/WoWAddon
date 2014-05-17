var SearchAllAddon = function () {

}

SearchAllAddon.prototype.execute = function () {

    (new SearchAllFactory).create();

    if (Auction.page == 'browse') {
        AuctionBrowse.perPage = 200;
    }
}

unsafeWindow.SearchAllAddon = SearchAllAddon;