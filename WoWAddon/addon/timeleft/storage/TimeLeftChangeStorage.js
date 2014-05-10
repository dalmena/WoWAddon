var TimeLeftChangeStorage = function(){}

TimeLeftChangeStorage.prototype = new IndexableStorage('time-left-changes', new LocalStorage());

unsafeWindow.TimeLeftChangeStorage = TimeLeftChangeStorage;