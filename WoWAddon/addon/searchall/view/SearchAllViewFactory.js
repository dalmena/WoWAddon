var SearchButtonViewFactory = {}
var SearchPercentComboViewFactory = {}
var SearchCheckBoxViewFactory = {}

SearchButtonViewFactory.create = function (title, isConfirmButton) {
    var buttonClass = isConfirmButton ? 'button1' : 'button2';

    return $('<div class="column">'
                    + '<button id="smartFilterApply" type="button" class="ui-button ' + buttonClass + '">'
                        + '<span class="button-left"><span class="button-right">' + title + '</span></span>'
                    + '</button>'
            + '</div>');
}

SearchPercentComboViewFactory.create = function (title) {
    return $('<div class="column">'
                    + '<label for="smartPriceDiff">' + title + '</label>'
                    + '<select id="smartPriceDiff" class="input select">'
                        + '<option value="0.1">10%</option>'
                        + '<option value="0.2">20%</option>'
                        + '<option value="0.3">30%</option>'
                        + '<option value="0.4">40%</option>'
                        + '<option value="0.5">50%</option>'
                        + '<option value="0.6">60%</option>'
                        + '<option value="0.7">70%</option>'
                        + '<option value="0.8">80%</option>'
                        + '<option value="0.9">90%</option>'
                        + '<option value="1.0">100%</option>'
                        + '<option value="0">Bid Only</option>'
                    + '</select>'
            + '</div>');
}

SearchCheckBoxViewFactory.create = function (title) {
    return $('<div class="column">'
                 + '<label for="smartFilterApplyCheckBox">' + title + '</label>'
                 + '<input type="checkbox" id="smartFilterApplyCheckBox" name="smartFilterApplyCheckBox" value="Bike" />'
            + '</div>');
}

SearchPercentComboViewFactory.setValue = function (view, value) {
    view.find('select').val(value);
}

unsafeWindow.SearchButtonViewFactory = SearchButtonViewFactory;
unsafeWindow.SearchPercentComboViewFactory = SearchPercentComboViewFactory;
unsafeWindow.SearchCheckBoxViewFactory = SearchCheckBoxViewFactory;