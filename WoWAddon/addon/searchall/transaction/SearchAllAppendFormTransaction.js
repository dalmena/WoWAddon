var SearchAllAppendFormTransaction = function () {
    this.priceDiff = SearchPercentComboViewFactory.create('Price diff');
    this.apply = SearchButtonViewFactory.create('APPLY', true);
    this.clear = SearchButtonViewFactory.create('Clear', false);
    this.filterTransaction = new SearchAllFilterTransaction();
}

SearchAllAppendFormTransaction.prototype.execute = function () {
    this.appendElements();
    this.setUpEvents();
}

SearchAllAppendFormTransaction.prototype.appendElements = function () {
    $('#browse-form').append(this.priceDiff);
    $('#browse-form').append('<br />');
    $('#browse-form').append(this.apply);
    $('#browse-form').append(this.clear);
    $('#browse-form').append('<br />');
    $('#browse-form').append('<br />');
    $('#browse-form').append('<br />');
}

SearchAllAppendFormTransaction.prototype.setUpEvents = function () {
    var that = this;

    this.apply.click(function () {
        that.filterTransaction.execute();
    });

    this.clear.click(function () {
        that.filterTransaction.reverse();
    });
}

unsafeWindow.SearchAllAppendFormTransaction = SearchAllAppendFormTransaction;