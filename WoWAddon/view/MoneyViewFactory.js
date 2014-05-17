var MoneyViewFactory = {}

MoneyViewFactory.create = function (type, name, tabIndex, maxLength) {
    var view = $('<span>').attr('class', 'icon-' + type);

    var inputView = $('<input>')
                    .attr('id', 'form-' + name)
                    .attr('type', 'text')
                    .attr('tabIndex', tabIndex)
                    .attr('name', name)
                    .attr('maxlength', maxLength)
                    .attr('class', 'input align-right')
                    .css('width', type == 'gold' ? '45px' : '20px');

    view.append(inputView);

    return view;
}

MoneyViewFactory.format = function (view,name, amount) {
    $('#form-'+name, view).val(amount);
}

MoneyViewFactory.getValue = function (view, name) {
    var value = $('input[id="form-'+name+'"]', view).val();

    value = parseInt(value);

    if(!isFinite(value) || isNaN(value))
        return 0;

    return value;
}


MoneyGoldViewFactory = {}
MoneyGoldViewFactory.create = function (name, tabIndex) {
    return MoneyViewFactory.create('gold', name, tabIndex, '6');
}

MoneySilverViewFactory = {}
MoneySilverViewFactory.create = function (name, tabIndex) {
    return MoneyViewFactory.create('silver', name, tabIndex, '2');
}

MoneyCopperViewFactory = {}
MoneyCopperViewFactory.create = function (name, tabIndex) {
    return MoneyViewFactory.create('copper', name, tabIndex, '2');
}


unsafeWindow.MoneyViewFactory = MoneyViewFactory;
unsafeWindow.MoneyGoldViewFactory = MoneyGoldViewFactory;
unsafeWindow.MoneySilverViewFactory = MoneySilverViewFactory;
unsafeWindow.MoneyCopperViewFactory = MoneyCopperViewFactory;