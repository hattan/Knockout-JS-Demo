/// <reference path="../Scripts/knockout-1.3.0beta.js" />

function Task(id, name, complete) {
    this.id = ko.observable(id);
    this.name = ko.observable(name);
    this.complete = complete;
}

var viewModel = {
    tasks: ko.observableArray([
            new Task(0, "eat lunch",false),
            new Task(1, "go for a run",true)
        ])
};
ko.applyBindings(viewModel);