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

CustomSummary.prototype.onAnyChange = function (callback) {
    for (var id in this.fields) {
        var event = (function (id) { 
            return function (value) {
                callback(id, value);
            };
        })(id);

        this.onChange(id, event);
    }
}


unsafeWindow.CustomSummary = CustomSummary;