var UnitPriceViewFactory = {}

UnitPriceViewFactory.create = function (title, name) {
    var view = $('<tr>')
        .append(
            $('<td>').append(
                $('<label>').attr('for', 'form-' + name + 'Gold').text(title)
            )
        )
        .append(
            $('<td>').attr('id', 'form-' + name + 'Money')
                .append(MoneyGoldViewFactory.create(name + 'Gold'))        
                .append(" ")
                .append(MoneySilverViewFactory.create(name + 'Silver'))
                .append(" ")
                .append(MoneyCopperViewFactory.create(name + 'Copper'))
        );

    return view;
} 

UnitPriceViewFactory.format = function (view, gold, silver, copper) {
    var name = UnitPriceViewFactory.getName(view);

    MoneyViewFactory.format(view, name + 'Gold', gold);
    MoneyViewFactory.format(view, name + 'Silver', silver);
    MoneyViewFactory.format(view, name + 'Copper', copper);
}

UnitPriceViewFactory.getValue = function (view) {
    var name = UnitPriceViewFactory.getName(view);

    var gold = MoneyViewFactory.getValue(view, name + 'Gold');
    var silver = MoneyViewFactory.getValue(view, name + 'Silver');
    var copper = MoneyViewFactory.getValue(view, name + 'Copper');

    return Auction.deformatMoney(gold, silver, copper);
}

UnitPriceViewFactory.getName = function (view) {
    return $('td[id*="form-"]', view).attr('id').replace('form-', '').replace(/Money$/, '');
}


unsafeWindow.UnitPriceViewFactory = UnitPriceViewFactory;