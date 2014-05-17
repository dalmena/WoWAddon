var SearchAllFactory = function () {

}

SearchAllFactory.prototype.create = function () {

    $('#browse-form').append('<div class="column">'
                                 + '<label for="smartPriceDiff">Price Diff:</label>'
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
                                 + '</select>'
                           + '</div>');

    $('#browse-form').append('<br />');
    $('#browse-form').append('<div class="column">'
                                 + '<button id="smartFilterApply" type="button" class="ui-button button1" onclick="(new SearchAllFilterTransaction()).execute()" >'
                                     + '<span class="button-left"><span class="button-right">Apply</span></span>'
                                 + '</button>'
                           + '</div>');
    $('#browse-form').append('<div class="column">'
                                 + '<button id="smartFilterClear" type="button" class="ui-button button2" onclick="(new SearchAllFilterTransaction()).reverse()" >'
                                     + '<span class="button-left"><span class="button-right">Clear</span></span>'
                                 + '</button>'
                           + '</div>');

    $('#browse-form').append('<br />');
    $('#browse-form').append('<br />');
    $('#browse-form').append('<br />');
}

unsafeWindow.SearchAllFactory = SearchAllAddon;