var CustomSummaryRadioList = function (groupName, defaultValue, options) {
    this.groupName = groupName;
    this.defaultValue = defaultValue;
    this.options = options;
    this.setupView();
}

CustomSummaryRadioList.prototype.setupView = function () {
    var that = this;

    this.view = $('<div>');

    for (var i in this.options) {
        var option = this.options[i];
         
        var optionView = $('<label>').append($('<input>').attr('type', 'radio')
                                                         .attr('name', this.groupName)
                                                         .val(option.value))
                                     .append($('<span>').text(option.text));

        this.view.append(optionView);
    }

    this.view.find('input').filter(function () {
        return $(this).val() == that.defaultValue;
    }).attr('checked', true);
}

CustomSummaryRadioList.prototype.onChange = function (callback) {
    this.view.find('input').change(function () {
        callback($(this).val());
    });
}

unsafeWindow.CustomSummaryRadioList = CustomSummaryRadioList;