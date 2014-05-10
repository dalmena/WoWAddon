var SessionStorage = function(){}
SessionStorage.prototype = new Storage(new WebStorableContainer(sessionStorage));


unsafeWindow.SessionStorage = SessionStorage;