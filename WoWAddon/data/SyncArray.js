var SyncArray = function (list) {
    this.list = list;
}

SyncArray.prototype.each = function (eachCallback) {
    this.eachCallback = eachCallback;
    return this;
}

SyncArray.prototype.complete = function (completeCallback) {
    new SyncForEachTransaction(this.list, this.eachCallback, completeCallback).execute();
    return this;
}

Object.defineProperty(Array.prototype, 'sync', {
    enumerable: false,
    value: function () {
        return new SyncArray(this);
    }
});

unsafeWindow.SyncArray = SyncArray;