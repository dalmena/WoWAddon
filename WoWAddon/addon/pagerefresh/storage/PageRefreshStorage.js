var AuctionRefreshStorage = function () { }

AuctionRefreshStorage.prototype = new IndexableStorage('auction-refresh', new LocalStorage())

unsafeWindow.AuctionRefreshStorage = AuctionRefreshStorage;