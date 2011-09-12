/// <reference path="../Scripts/knockout-1.3.0beta.js" />

var viewModel = {
    firstName: ko.observable("bob"),
    lastName: ko.observable("smith"),
    _age: ko.observable(35),
    validationMessage: ko.observable()
};

viewModel.Age = ko.dependentObservable({
    read: viewModel._age,
    write: function (value) {
        if (!isNaN(value)) {
            this._age(value);
            this.validationMessage("");
        }
        else {
            this.validationMessage("Age must be a number!");
        }

    },
    owner: viewModel
});


ko.applyBindings(viewModel);