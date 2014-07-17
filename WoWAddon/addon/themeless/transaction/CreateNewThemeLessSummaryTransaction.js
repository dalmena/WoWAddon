var CreateNewThemeLessSummaryTransaction = function (storage) {
    this.storage = storage;
}

CreateNewThemeLessSummaryTransaction.prototype.execute = function () {
    var storage = this.storage;
    var data = storage.get('summary');

    var summary = new CustomSummary();

    summary.setTitle('Theme Less Addon')
           .addField('turn', 'Turn', new CustomSummaryRadioList('turn', data.isTurnedOn.toString(), [{text: 'On', value: 'true'}, {text: 'Off', value: 'false'}]))
           .onChange('turn', function (value) {
               data.isTurnedOn = value == 'true';
               storage.set('summary', data);
           });

    new CreateNewCustomSummaryTransaction(summary).execute();

    return summary;
}

unsafeWindow.CreateNewThemeLessSummaryTransaction = CreateNewThemeLessSummaryTransaction;