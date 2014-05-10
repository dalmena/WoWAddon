var TimeLeftAddon = function(){
    this.auctionStorage = new TimeLeftAuctionStorage();
    this.changeStorage = new TimeLeftChangeStorage(); 
    this.notificationStorage = new AuctionNotificationStorage();
    this.viewTransactions = {};
}

TimeLeftAddon.prototype.execute = function(){
    this.addEachChangeView();
    this.listenNotifications();
}

TimeLeftAddon.prototype.addEachChangeView = function(){
    var changes = this.changeStorage.get('map');
    for(var i in changes)
       this.addChangeView(changes[i]);
}


TimeLeftAddon.prototype.listenNotifications = function(){
    var that = this;
    var listener = new AuctionListenNotificationTransaction(this.notificationStorage, function(notifications){
        for(var i=0;i<notifications.length;i++)
           that.onTimeLeftChange(notifications[i]);
    });  
    listener.execute();
}

TimeLeftAddon.prototype.addChangeView = function(change){
    var dateAtChange = new Date(change.date);
    var durationAtChange = new AuctionDuration(change.duration.hours, change.duration.minutes, change.duration.seconds);       
    var currentDate = new Date();

    var differenceInMilliseconds = currentDate.getTime() - dateAtChange.getTime();
    
    durationAtChange.addSeconds(Math.floor(-differenceInMilliseconds / 1000));
    
    this.addViewTransaction(change.code, durationAtChange);
}

TimeLeftAddon.prototype.addViewTransaction = function(code, duration){
    if(this.viewTransactions[code]){
        this.viewTransactions[code].reverse();
    }
    
    this.viewTransactions[code] = new AuctionTimeTransaction(new AuctionTime(code, duration));
    this.viewTransactions[code].execute();
}

TimeLeftAddon.prototype.onTimeLeftChange = function(notification){
    for(var i in notification.data){
        var change = notification.data[i];        
        this.addChangeView(change);
    }
}

unsafeWindow.TimeLeftAddon = TimeLeftAddon;