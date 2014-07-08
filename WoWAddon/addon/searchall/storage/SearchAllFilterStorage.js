var SearchAllFilterStorage = function () { }

SearchAllFilterStorage.prototype = new IndexableStorage('search-all-filter', new SessionStorage())

unsafeWindow.SearchAllFilterStorage = SearchAllFilterStorage;