
var viewModel = {
    newLineKeycode: 13,
    emptyToDoText: "Empty todo...",
    items: ko.observableArray(),
    itemToAdd: ko.observable(""),
    addItem: function (event) {
        if (event.keyCode == this.newLineKeycode) {
            var itemValue = this.itemToAdd();
            itemValue = itemValue !== "" ? itemValue : this.emptyToDoText;
            this.items.push({
                item: ko.observable(itemValue),
                cleared: ko.observable(false),
                editing: ko.observable(false)
            });
            this.itemToAdd("");
        }
        return true;
    },
    deleteItem: function (item) {
        this.items.remove(item);
    },
    editItem: function (item) {
        item.editing(true);
    },
    displaytItem: function (item) {
        item.editing(false);
    },
    saveEdit: function (event, item) {
        if (event.keyCode == viewModel.newLineKeycode) {
            setTimeout(function () { viewModel.displaytItem(item); }, 100);
        }
        return true;
    },
    remainingItemCount: function () {
        return ko.utils.arrayFilter(this.items(), function (i) { return !(i.cleared()); }).length;
    },
    clearedItemCount: function () {
        return this.clearedItems().length;
    },
    clearedItems: function () {
        return ko.utils.arrayFilter(this.items(), function (i) { return (i.cleared()); });
    },
    removeClearedItems: function () {
        var items = this.items();
        var length = items.length;
        for (var i = 0; i < length; i++) {
            var item = items[i];
            if (item.cleared()) {
                this.items.remove(item);
            }
        }
    }

};

function makeHandler(newValue) {
    viewModel.Save();
}

viewModel.items.subscribe(function (itemsArray) {
    for (i = 0; i < itemsArray.length; i++) {
        var item = itemsArray[i];
        item.item.subscribe(makeHandler);
        item.cleared.subscribe(makeHandler);
    }

    viewModel.Save();
});



var isLoading = true;
viewModel.Save = function () {
    if (isLoading) { return; }
    if (Modernizr.localstorage) {
        localStorage.clear();
        var json = ko.toJSON(viewModel);
        localStorage.items = json;
    }
};

if (Modernizr.localstorage) {
    var json = localStorage.items;
    if (json !== "" && json !== undefined && json !== null) {
        var vm = JSON.parse(json);
        var stuff = vm.items;
        for (k = 0; k < stuff.length; k++) {
            var newItem = stuff[k];
            viewModel.items.push({
                item: ko.observable(newItem.item),
                cleared: ko.observable(newItem.cleared),
                editing: ko.observable(newItem.editing)
            });
        }
    }
}

isLoading = false;

ko.applyBindings(viewModel);