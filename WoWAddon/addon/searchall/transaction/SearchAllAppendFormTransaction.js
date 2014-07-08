var SearchAllAppendFormTransaction = function () {
    this.storage = new SearchAllFilterStorage();
    this.filterTransaction = new SearchAllFilterTransaction(this.storage);

    this.priceDiff = SearchPercentComboViewFactory.create('Price diff');
    this.apply = SearchButtonViewFactory.create('APPLY', true);
    this.clear = SearchButtonViewFactory.create('Clear', false);

    var ratio = this.storage.get('search-all-filter', new SearchAllFilter(0.1)).ratio;
    SearchPercentComboViewFactory.setValue(this.priceDiff, ratio);
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