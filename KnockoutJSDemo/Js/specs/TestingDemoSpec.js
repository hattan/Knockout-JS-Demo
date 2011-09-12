/// <reference path="../../Scripts/knockout-1.3.0beta.js" />
/// <reference path="../../Scripts/jasmine/jasmine.js" />

describe("Knockout Testing Demo", function () {
    beforeEach(function () {
        viewModel._age(35);
    });

    it("should set the viewModel age field if input is a number", function () {
        //do
        viewModel.Age(65);
        //verify
        expect(viewModel._age()).toEqual(65);
    });

    it("should NOT set the viewModel age field if input is not a number", function () {
        //do
        viewModel.Age("test");
        //verify
        expect(viewModel._age()).toEqual(35);
    });

    it("should set validation message to 'Age must be a number!' if validation fails", function () {
        //do
        viewModel.Age("test");
        //verify
        expect(viewModel.validationMessage()).toEqual("Age must be a number!");
    });

    it("should set validation message to empty string if validation passes", function () {
        //do
        viewModel.Age(123123);
        //verify
        expect(viewModel.validationMessage()).toEqual("");
    });
});