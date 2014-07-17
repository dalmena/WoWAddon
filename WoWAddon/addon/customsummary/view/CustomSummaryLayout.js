var CustomSummaryLayout = function (summary) {
    this.summary = summary;
    this.setupView();
}

CustomSummaryLayout.prototype.setupView = function () {
    this.view = $('<table>').attr('class', 'custom-summary');

    var col1 = $('<col>').attr('width', '25%');
    var col2 = $('<col>').attr('width', '25%');
    var col3 = $('<col>').attr('width', '50%');
    var header = $('<tr>');
    var headerTitle = $('<td>').attr('class', 'align-center').attr('colspan', '2').append($('<strong>').text('Options'));
    var headerEmpty = $('<td>').attr('class', 'align-center').text('');

    this.view.append(col1);
    this.view.append(col2);
    this.view.append(col3);
    this.view.append(header);
    header.append(headerTitle);
    header.append(headerEmpty);

    for (var id in this.summary.fields) {
        this.appendFieldView(this.summary.fields[id]);
    }    
}

CustomSummaryLayout.prototype.appendFieldView = function (field) {
    var line = $('<tr>');
    var col1 = $('<td>').attr('class', 'align-right').text(field.title);
    var col2 = $('<td>');
    var col3 = $('<td>');

    console.log(field);

    col2.append(field.field.view);

    line.append(col1);
    line.append(col2);
    line.append(col3);
    this.view.append(line);
}

unsafeWindow.CustomSummaryLayout = CustomSummaryLayout;