
var AuctionDocumentMappingTransaction = function (document, auctionMapper) {
    this.document = document;
    this.auctionMapper = auctionMapper;
}

AuctionDocumentMappingTransaction.prototype = new AuctionMappingTransaction(null);

AuctionDocumentMappingTransaction.prototype.execute = function () {
    var allAuctionViews = $('tr[id*="auction-"]', this.document);
    return this.extractAllAuctionsFromViews(allAuctionViews);
}

unsafeWindow.AuctionDocumentMappingTransaction = AuctionDocumentMappingTransaction;

