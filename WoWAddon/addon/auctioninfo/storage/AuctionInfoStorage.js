AuctionInfoStorage = function () { }

AuctionInfoStorage.prototype = new IndexableStorage('auction-info', new LocalStorage())

unsafeWindow.AuctionInfoStorage = AuctionInfoStorage;