/// <reference path="../Scripts/knockout-1.3.0beta.js" />

var viewModel = {
    Companies: ko.observableArray([
            { Name: "Toyota", Models: ['camry', 'prius', '4Runner'] },
            { Name: "Honda", Models: ['civic', 'accord', 'CR-V', 'Pilot'] },
            { Name: "BMW", Models: ['325i', '750il'] },
            { Name: "Porsche", Models: ['911'] },
        ]),
    selectedCompany: ko.observable(),
    selectedModel: ko.observable()
};

ko.applyBindings(viewModel); 