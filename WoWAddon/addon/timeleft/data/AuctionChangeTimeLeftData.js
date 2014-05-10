var AuctionChangeTimeLeftData = function(lastAuction, currentAuction){
 	this.code = lastAuction.code;
    this.date = new Date();
    this.duration = this.getDurationBasedOnCategory(currentAuction.timeLeft);
    this.lastAuction = lastAuction;
    this.currentAuction = currentAuction;
}

AuctionChangeTimeLeftData.prototype.getDurationBasedOnCategory = function(category){
    category = category.toLowerCase();
    switch(category) {
        case 'short':
        	return new AuctionDuration(0, 30, 0); 
        case 'medium':
            return new AuctionDuration(2, 0, 0);
        case 'long':
            return new AuctionDuration(12, 0, 0);
    } 
    
    return new AuctionDuration(48, 0, 0);
}

unsafeWindow.AuctionChangeTimeLeftData = AuctionChangeTimeLeftData;