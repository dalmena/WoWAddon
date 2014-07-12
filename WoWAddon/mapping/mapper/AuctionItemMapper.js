var AuctionItemMapper = function(){}

AuctionItemMapper.prototype.map = function(view){
	var item = new AuctionItem();  

    item.code = view.attr('id').replace('auction-', '');
    item.name = view.find('.item a strong').text();
    item.timeLeft = view.find('.time span').text();
    item.category = view.parent().parent().parent().parent().attr('id');
    item.itemTypeCode = view.find('.item a').attr('href').replace(/[\w\W]*\/(\d)/, '$1');
    item.query = view.find('.item a').attr('data-item');

    if (!item.category) {
        item.category = view.parent().parent().parent().parent().attr('class');
    }

    return item;
}    

AuctionItemMapper.prototype.canMap = function(view){
	return true;
}

AuctionItemMapper.prototype.shouldSelectIt = function(data){
	return data != null;
}

unsafeWindow.AuctionItemMapper = AuctionItemMapper;