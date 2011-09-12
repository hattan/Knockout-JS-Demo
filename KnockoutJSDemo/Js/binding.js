// This syntax would be way more succinct with CoffeeScript
ko.bindingConventions.conventions(".person-editor", {
    ".person-editor": { 'with': myViewModel.person },
    ".first-name": function (person) { return { value: person.firstName} },
    ".last-name": function (person) { return { value: person.lastName} }
});

ko.bindingConventions.conventions("#weather-list", {
    "#weather-list": { 'with': myViewModel.weather },
    ".cities-list": function (weather) { return { foreach: weather.cities} },
    ".city": function (item) { return { text: item.city} },
    ".temp": function (item) { return { text: item.temperature} },
    ".add-city": { click: function () { this.addItem() } }
});

ko.applyBindings(myViewModel);