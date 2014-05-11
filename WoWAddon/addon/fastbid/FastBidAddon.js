var FastBidAddon = function () {

}

FastBidAddon.prototype.execute = function(){
    var transaction = new ReplaceOpenBidDialogTransaction(function (id, minBid) {

        var money = Auction.formatMoney(minBid);

        var fakeSugestionBid = $('<div>').attr('id', 'auction-dialog-' + id).
            append($('<input>').attr('name', 'gold').val(money.gold)).
            append($('<input>').attr('name', 'silver').val(money.silver)).
            append($('<input>').attr('name', 'copper').val(money.copper));

        $(document.body).append(fakeSugestionBid);

        Auction.bid(id, $('<div>'));

        fakeSugestionBid.remove();

        return false;
    }).execute();
}

unsafeWindow.FastBidAddon = FastBidAddon;