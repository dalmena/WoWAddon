var AuctionNotificationStorage = function(){}

AuctionNotificationStorage.prototype = new IndexableStorage('notification', new LocalStorage());

unsafeWindow.AuctionNotificationStorage = AuctionNotificationStorage;