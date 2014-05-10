var AuctionListenNotificationTransaction = function(notificationStorage, notificationResponse){
    this.storage = notificationStorage;
    this.response = notificationResponse;
    this.timer = 10000;
}

AuctionListenNotificationTransaction.prototype.execute = function(){
 	var notifications = this.storage.get('notifications',[]);
    
    if(notifications.length > 0){
    	this.response(notifications);
    }
    
    this.storage.set('notifications', []);
    
    var that = this;
    setTimeout(function(){
        that.execute();
    }, this.timer);
}

unsafeWindow.AuctionListenNotificationTransaction = AuctionListenNotificationTransaction;