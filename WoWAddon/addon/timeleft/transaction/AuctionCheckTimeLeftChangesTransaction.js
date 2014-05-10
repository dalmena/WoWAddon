
var AuctionCheckTimeLeftChangesTransaction = function(auctionStorage, changeStorage, notificationStorage){    
    this.auctionStorage = auctionStorage;
    this.changeStorage = changeStorage;
    this.notificationStorage = notificationStorage;
   	this.auctions = null;
    this.timeLeftMapping = null; 
    this.changes = null;
};

AuctionCheckTimeLeftChangesTransaction.prototype.execute = function(){    
	this.setupAuctions();      
    this.lookForChanges();
    this.mapAllAuctions();
    this.saveChanges();
}


AuctionCheckTimeLeftChangesTransaction.prototype.setupAuctions = function(){  
    this.auctions = new AuctionMappingTransaction(new AuctionItemWithTimeLeftMapper()).execute(); 
    this.timeLeftMapping = this.auctionStorage.get('map', {}); 
    this.changes = [];
}

AuctionCheckTimeLeftChangesTransaction.prototype.lookForChanges = function(){    
    for(var i=0; i<this.auctions.length; i++){
     	var auction = this.auctions[i];
                        
		if(this.hasTimeLeftMapped(auction.code)){
       
            var map = this.getTimeLeftMapping(auction.code);
                        
            if(map.timeLeft != auction.timeLeft){
        		this.addChange(map, auction);                
            }
        }
    }
}

AuctionCheckTimeLeftChangesTransaction.prototype.mapAllAuctions = function(){  
    for(var i=0; i<this.auctions.length; i++){
     	var auction = this.auctions[i];
        this.timeLeftMapping[auction.code] = auction;
    }

    this.auctionStorage.set('map', this.timeLeftMapping);
}

AuctionCheckTimeLeftChangesTransaction.prototype.addChange = function(lastAuction, currentAuction){  
    this.changes.push(new AuctionChangeTimeLeftData(lastAuction, currentAuction));
}

AuctionCheckTimeLeftChangesTransaction.prototype.saveChanges = function(lastAuction, currentAuction){  
    var changes = this.changeStorage.get('map', {});  
    
    for(var i=0; i<this.changes.length; i++){
        var newChange = this.changes[i];
        changes[newChange.code] = newChange;
    }
    
    this.changeStorage.set('map', changes);
    
    if(this.notificationStorage){
     	new AuctionCreateNotificationTransaction(this.notificationStorage, new AuctionNotification('changes', changes)).execute();
    }
}

AuctionCheckTimeLeftChangesTransaction.prototype.hasTimeLeftMapped = function(auctionCode){ 
    if(this.timeLeftMapping[auctionCode])
       return true;
    
    return false;
}

AuctionCheckTimeLeftChangesTransaction.prototype.getTimeLeftMapping = function(auctionCode){ 
    return this.timeLeftMapping[auctionCode];
}


unsafeWindow.AuctionCheckTimeLeftChangesTransaction = AuctionCheckTimeLeftChangesTransaction;