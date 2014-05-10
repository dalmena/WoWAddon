var ThemeLessStorage = function () { }

ThemeLessStorage.prototype = new IndexableStorage('theme-less', new SessionStorage())

unsafeWindow.ThemeLessStorage = ThemeLessStorage;