var ExtractLoadedAuctionItemInformationTransaction = function (itemTypeCode, query, newDocument) {
    this.itemTypeCode = itemTypeCode;
    this.query = query;
    this.document = newDocument;
}

ExtractLoadedAuctionItemInformationTransaction.prototype.execute = function () {
    var auction = new AuctionInfo();    
    auction.itemTypeCode = this.itemTypeCode;
    auction.query = this.query;
    auction.price = this.extractPrice();
    return auction;
}

ExtractLoadedAuctionItemInformationTransaction.prototype.extractPrice = function () {
    var gold = $('.icon-gold', this.document);
    var silver = $('.icon-silver', this.document);
    var copper = $('.icon-copper', this.document);

    var price = {
        gold: gold.length > 0 ? parseInt(gold.text(), 10) : 0,
        silver: silver.length > 0 ? parseInt(silver.text(), 10) : 0,
        copper: copper.length > 0 ? parseInt(copper.text(), 10) : 0
    };

    price.money = Auction.deformatMoney(price.gold, price.silver, price.copper);

    return price;
}




unsafeWindow.ExtractLoadedAuctionItemInformationTransaction = ExtractLoadedAuctionItemInformationTransaction;