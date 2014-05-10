var AuctionCreateNotificationTransaction = function(notificationStorage, notification){
	this.storage = notificationStorage;
    this.notification = notification;
}

AuctionCreateNotificationTransaction.prototype.execute = function(){
    var notifications = this.storage.get('notifications',[]);
    notifications.push(this.notification);
    this.storage.set('notifications', notifications);
}

unsafeWindow.AuctionCreateNotificationTransaction = AuctionCreateNotificationTransaction;