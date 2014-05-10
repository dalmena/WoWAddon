var SummaryViewFactory = {}

SummaryViewFactory.DEFAULT_CLASS = 'activity';

SummaryViewFactory.create = function () {
    var view = $('<div>').attr('class', SummaryViewFactory.DEFAULT_CLASS);
    var viewTitle = $('<h3>').attr('class', 'subheader');
      
    view.append(viewTitle);

    return view;
}

SummaryViewFactory.format = function (view, title) {
    $('h3.subheader', view).text(title);
}

SummaryViewFactory.append = function(view, innerView){
    view.append(innerView);
}

unsafeWindow.SummaryViewFactory = SummaryViewFactory;
