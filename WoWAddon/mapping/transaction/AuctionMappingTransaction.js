
var AuctionMappingTransaction = function(auctionMapper){
    this.auctionMapper = auctionMapper;
}

AuctionMappingTransaction.prototype.execute = function(){
    var allAuctionViews = $('tr[id*="auction-"]');
    return this.extractAllAuctionsFromViews(allAuctionViews);    
}

AuctionMappingTransaction.prototype.extractAllAuctionsFromViews = function(allAuctionViews){
    var auctions = [];
    for(var i=0; i<allAuctionViews.length; i++){
        var view = allAuctionViews[i];
        
        if(this.auctionMapper.canMap($(view))){
        	var data = this.auctionMapper.map($(view));
			
            if(this.auctionMapper.shouldSelectIt(data)){
            	auctions.push(data);
            }
        }        
    }
    return auctions;
}

unsafeWindow.AuctionMappingTransaction = AuctionMappingTransaction;

