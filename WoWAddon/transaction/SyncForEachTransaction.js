var SyncForEachTransaction = function (list, eachCallback, completeCallback) {
    var that = this;

    this.list = list;
    this.eachCallback = eachCallback;
    this.completeCallback = completeCallback;
    this.currentIndex;
    this.results;
    this.completeCurrentIterationKey = function (result) {
        that.currentIndex++;

        if (result !== undefined)
            that.results.push(result);

        setTimeout(function () {
            that.runNextIndex()
        }, 1);
    }
}

SyncForEachTransaction.prototype.execute = function () {
    this.currentIndex = 0;
    this.results = [];
    this.runNextIndex();
}

SyncForEachTransaction.prototype.runNextIndex = function () {
    if (this.currentIndex < this.list.length) {
        var that = this;

        this.eachCallback(this.currentIndex, this.list[this.currentIndex], this.completeCurrentIterationKey);
    }
    else {
        this.completeCallback(this.results);
    }
}

unsafeWindow.SyncForEachTransaction = SyncForEachTransaction;