function personModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
}

function weatherModel() {
    this.cities = ko.observableArray([
        { city: "London", temperature: 22 },
        { city: "Paris", temperature: 26 }
    ]);

    this.addItem = function () {
        this.cities.push({ city: "New city", temperature: "Something" })
    }
}

function appViewModel() {
    this.person = new personModel();
    this.weather = new weatherModel();
};

var myViewModel = new appViewModel();



