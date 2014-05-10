var TimeLeftViewFactory = {}

TimeLeftViewFactory.DEFAULT_CLASS = 'time-left';

TimeLeftViewFactory.create = function(auctionTime){
    var view = $('<div>');
    view.attr('class', TimeLeftViewFactory.DEFAULT_CLASS);
    view.css('text-align', 'center');
    
    TimeLeftViewFactory.format(view, auctionTime.duration); 
    
    return view;
}

TimeLeftViewFactory.format = function(view, duration){
    view.text(duration.hours + ":" + duration.minutes + ":" + duration.seconds);
}

unsafeWindow.TimeLeftViewFactory = TimeLeftViewFactory;