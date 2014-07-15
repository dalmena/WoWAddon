var CustomSummaryTextField = function (value, valueUnit) {
    this.value = value;
    this.valueUnit = valueUnit;
    this.setupView();
}

CustomSummaryTextField.prototype.setupView = function () {
    this.view = $('<label>').append($('<input>').attr('type', 'text')
                                                .val(this.value));

    if (this.valueUnit)
        this.view.append($('<span>').text(this.valueUnit));
}

CustomSummaryTextField.prototype.onChange = function (callback) {
    this.view.find('input').change(function () {
        callback($(this).val());
    });
}

unsafeWindow.CustomSummaryTextField = CustomSummaryTextField;