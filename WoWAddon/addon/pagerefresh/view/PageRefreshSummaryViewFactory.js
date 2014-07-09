var PageRefreshSummaryViewFactory = {}

PageRefreshSummaryViewFactory.DEFAULT_CLASS = 'summary-page-refresh';

PageRefreshSummaryViewFactory.create = function (refreshTimeValue) {
    var view = $('<table>').attr('class', PageRefreshSummaryViewFactory.DEFAULT_CLASS);
    var col1 = $('<col>').attr('width', '25%');
    var col2 = $('<col>').attr('width', '25%');
    var col3 = $('<col>').attr('width', '50%');

    var headerLine = $('<tr>');
    var headerLineTitle = $('<td>').attr('class', 'align-center').attr('colspan', '2').append($('<strong>').text('Options'));
    var headerLineEmpty = $('<td>').attr('class', 'align-center').text('');

    var textLine = $('<tr>');
    var textCol1 = $('<td>').attr('class', 'align-right').text('Refresh delay');
    var textCol2 = $('<td>');
    var textCol3 = $('<td>');

    var text = $('<label>').append($('<input>').attr('type', 'text')
                                               .attr('name', 'summary-page-refresh-delay')
                                               .attr('class', 'summary-page-refresh-delay'))
                           .append($('<span>').text('miliseconds'));


    textCol2.append(text);

    view.append(col1);
    view.append(col2);
    view.append(col3);

    view.append(headerLine);
    headerLine.append(headerLineTitle);
    headerLine.append(headerLineEmpty);

    view.append(textLine);
    textLine.append(textCol1);
    textLine.append(textCol2);
    textLine.append(textCol3);

    return view;
}

PageRefreshSummaryViewFactory.format = function (view, refreshTime) {
    $('.summary-page-refresh-delay', view).val(refreshTime);
}

PageRefreshSummaryViewFactory.onDelayChange = function (view, response) {
    var text = $('.summary-page-refresh-delay', view);

    text.change(function () {
        response($(this).val());
    });
}

unsafeWindow.PageRefreshSummaryViewFactory = PageRefreshSummaryViewFactory;
