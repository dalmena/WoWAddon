var TimeLeftAuctionStorage = function(){}

TimeLeftAuctionStorage.prototype = new IndexableStorage('time-left-auctions', new SessionStorage())

unsafeWindow.TimeLeftAuctionStorage = TimeLeftAuctionStorage;