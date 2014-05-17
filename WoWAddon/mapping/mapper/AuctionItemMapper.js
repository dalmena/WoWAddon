var AuctionItemMapper = function(){}

AuctionItemMapper.prototype.map = function(view){
	var item = new AuctionItem();  

    item.code = view.attr('id').replace('auction-', '');
    item.name = view.find('.item a strong').text();
    item.timeLeft = view.find('.time span').text();
    
    return item;
}    

AuctionItemMapper.prototype.canMap = function(view){
	return true;
}

AuctionItemMapper.prototype.shouldSelectIt = function(data){
	return data != null;
}

unsafeWindow.AuctionItemMapper = AuctionItemMapper;