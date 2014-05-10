var AuctionItemWithTimeLeftMapper = function(){};

AuctionItemWithTimeLeftMapper.prototype = new AuctionItemMapper();

AuctionItemWithTimeLeftMapper.prototype.canMap = function(view){
    return this.viewIsChildOf(view, '#bids-active') || this.viewIsChildOf(view, '#auctions-active');
}

AuctionItemWithTimeLeftMapper.prototype.viewIsChildOf = function(view, parent){
 	return view.parents(parent).length > 0;
}

AuctionItemWithTimeLeftMapper.prototype.shouldSelectIt = function(data){
    return data.timeLeft != null;
};

unsafeWindow.AuctionItemWithTimeLeftMapper = AuctionItemWithTimeLeftMapper;