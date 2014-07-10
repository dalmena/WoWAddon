var AuctionRefreshStorage = function () { }

AuctionRefreshStorage.prototype = new IndexableStorage('auction-refresh', new SessionStorage())

unsafeWindow.AuctionRefreshStorage = AuctionRefreshStorage;