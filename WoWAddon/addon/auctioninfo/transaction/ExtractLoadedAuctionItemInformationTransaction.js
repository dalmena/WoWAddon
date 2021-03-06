﻿var ExtractLoadedAuctionItemInformationTransaction = function (itemTypeCode, query, newDocument) {
    this.itemTypeCode = itemTypeCode;
    this.query = query;
    this.document = newDocument;
}

ExtractLoadedAuctionItemInformationTransaction.prototype.execute = function () {
    var auction = new AuctionInfo();    
    auction.itemTypeCode = this.itemTypeCode;
    auction.query = this.query;
    auction.sellPrice = this.extractSellPrice();
    return auction;
}

ExtractLoadedAuctionItemInformationTransaction.prototype.extractSellPrice = function () {
    var itemSpec = $('li', this.document).filter(function () {
        return $(this).text().indexOf('Sell Price:') != -1;
    });

    var gold = $('.icon-gold', itemSpec);
    var silver = $('.icon-silver', itemSpec);
    var copper = $('.icon-copper', itemSpec);

    var price = {
        gold: gold.length > 0 ? parseInt(gold.text(), 10) : 0,
        silver: silver.length > 0 ? parseInt(silver.text(), 10) : 0,
        copper: copper.length > 0 ? parseInt(copper.text(), 10) : 0
    };

    price.money = Auction.deformatMoney(price.gold, price.silver, price.copper);

    return price;
}

unsafeWindow.ExtractLoadedAuctionItemInformationTransaction = ExtractLoadedAuctionItemInformationTransaction;