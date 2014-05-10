var AuctionTimeTransaction = function(auctionTime){
	this.auctionTime = auctionTime;
    this.timer = null;
}

AuctionTimeTransaction.prototype.execute = function(){
    var view = TimeLeftViewFactory.create(this.auctionTime);
    this.findAuction().append(view);
    
    this.timer = new DurationTimerTransaction(view, this.auctionTime.duration, new Date());
    this.timer.execute();
}

AuctionTimeTransaction.prototype.reverse = function(){
    this.timer.reverse();
 	this.findAuction().find('.' + TimeLeftViewFactory.DEFAULT_CLASS).remove();
}	

AuctionTimeTransaction.prototype.findAuction = function(){
    return $('#auction-'+this.auctionTime.code+' .time');
}

unsafeWindow.AuctionTimeTransaction = AuctionTimeTransaction;