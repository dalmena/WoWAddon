var Storage = function(storagableContainer){
    this.storagableContainer = storagableContainer;
}

Storage.prototype.set = function(index, data){
    data = data ? JSON.stringify(data) : JSON.stringify(null);
    
    this.storagableContainer.set(index, data);
}

Storage.prototype.get = function(index, defaultValue){
    var data = this.storagableContainer.get(index);
    
    if(data)
        return JSON.parse(data);
    
    return defaultValue ? defaultValue : null;
}

unsafeWindow.Storage = Storage;