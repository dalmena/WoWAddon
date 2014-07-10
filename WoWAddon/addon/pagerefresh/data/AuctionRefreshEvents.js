var AuctionRefreshEvents = {
    onRefresh: [],
    fire: function (events) {
        for (var i = 0; i < events.length; i++) {
            events[i]();
        }
    }
}
