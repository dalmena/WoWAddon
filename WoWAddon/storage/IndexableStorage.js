var IndexableStorage = function(index, storage){
    this.storage = storage;
    this.index = index;
}

IndexableStorage.prototype.set = function(index, data){
    this.storage.set(this.index + index, data);
}
 
IndexableStorage.prototype.get = function(index, defaultValue){
    return this.storage.get(this.index + index, defaultValue);
}

unsafeWindow.IndexableStorage = IndexableStorage;