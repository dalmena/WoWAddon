var LocalStorage = function(){}
LocalStorage.prototype = new Storage(new WebStorableContainer(localStorage));

unsafeWindow.LocalStorage = LocalStorage;