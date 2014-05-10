var ThemeLessSummaryViewFactory = {}

ThemeLessSummaryViewFactory.DEFAULT_CLASS = 'summary-theme-less';

ThemeLessSummaryViewFactory.create = function () {
    var view = $('<table>').attr('class', ThemeLessSummaryViewFactory.DEFAULT_CLASS);
    var col1 = $('<col>').attr('width', '25%');
    var col2 = $('<col>').attr('width', '25%');
    var col3 = $('<col>').attr('width', '50%');

    var headerLine = $('<tr>');
    var headerLineTitle = $('<td>').attr('class', 'align-center').attr('colspan', '2').append($('<strong>').text('Options'));
    var headerLineEmpty = $('<td>').attr('class', 'align-center').text('');

    var turnOnLine = $('<tr>');
    var turnOnCol1 = $('<td>').attr('class', 'align-right').text('Turn');
    var turnOnCol2 = $('<td>');
    var turnOnCol3 = $('<td>');

    var radioOn = $('<label>').append($('<input>').attr('type', 'radio').attr('name', 'summary-theme-less-turn').attr('class', 'summary-theme-less-turn-on')).append($('<span>').text('On'));
    var radioOff = $('<label>').append($('<input>').attr('type', 'radio').attr('name', 'summary-theme-less-turn').attr('class', 'summary-theme-less-turn-off')).append($('<span>').text('Off'));

    turnOnCol2.append(radioOn);
    turnOnCol2.append(radioOff);

    view.append(col1);
    view.append(col2);
    view.append(col3);

    view.append(headerLine);
    headerLine.append(headerLineTitle);
    headerLine.append(headerLineEmpty);

    view.append(turnOnLine);
    turnOnLine.append(turnOnCol1);
    turnOnLine.append(turnOnCol2);
    turnOnLine.append(turnOnCol3);

    return view;
}

ThemeLessSummaryViewFactory.format = function (view, isTurnedOn) {
    var radio = '.summary-theme-less-turn-' + (isTurnedOn ? 'on' : 'off');
    $(radio, view).attr('checked', 'checked');
}

ThemeLessSummaryViewFactory.onTurnChange = function (view, response) {
    var radioOn = $('.summary-theme-less-turn-on', view);
    var radioOff = $('.summary-theme-less-turn-off', view);

    radioOn.click(function () {
        response(true);
    });

    radioOff.click(function () {
        response(false);
    });
}

unsafeWindow.ThemeLessSummaryViewFactory = ThemeLessSummaryViewFactory;
