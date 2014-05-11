var ReplaceOpenBidDialogTransaction = function (event) {
    this.event = event;
    this.oldEvent = Auction.openBid;
}

ReplaceOpenBidDialogTransaction.prototype.execute = function () {
    Auction.openBid = this.event;
}

unsafeWindow.ReplaceOpenBidDialogTransaction = ReplaceOpenBidDialogTransaction;