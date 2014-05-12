var UnitPriceAddon = function () {

}

UnitPriceAddon.prototype.execute = function () {
    if (Auction.page == 'create') {
        new CreateUnitPriceForSellTransaction().execute();
    }
}

unsafeWindow.UnitPriceAddon = UnitPriceAddon;