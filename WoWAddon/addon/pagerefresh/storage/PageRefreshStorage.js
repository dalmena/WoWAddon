var PageRefreshStorage = function () { }

PageRefreshStorage.prototype = new IndexableStorage('page-refresh', new SessionStorage())

unsafeWindow.PageRefreshStorage = PageRefreshStorage;