var ChangeResetFormForCreateAuction = function (event) {
    this.event = event;
    this.oldEvent = AuctionCreate.resetPerType;
}

ChangeResetFormForCreateAuction.prototype.execute = function () {
    AuctionCreate.resetPerType = this.event;
}

ChangeResetFormForCreateAuction.prototype.callOldEvent = function () {
    this.oldEvent.apply(AuctionCreate, arguments);
}

unsafeWindow.ChangeResetFormForCreateAuction = ChangeResetFormForCreateAuction;