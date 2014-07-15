var CustomSummary = function () {
    this.title;
    this.fields = {};
}

CustomSummary.prototype.setTitle = function (title) {
    this.title = title;

    return this;
}

CustomSummary.prototype.addField = function (id, title, field) {
    this.fields[id] = {
        id: id,
        title: title,
        field: field
    };

    return this;
}

CustomSummary.prototype.onChange = function (id, callback) {
    this.fields[id].field.onChange(callback);
    return this;
}

unsafeWindow.CustomSummary = CustomSummary;