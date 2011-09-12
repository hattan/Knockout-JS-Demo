/// <reference path="../Scripts/knockout-1.3.0beta.js" />

var geocoder, map, viewModel;

function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(0, 0);
    var myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    viewModel.addMarker("Disneyland", "disneyland, anaheim, ca");
}

function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } 
        else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

$(function() {
    viewModel = {
        markers: ko.observableArray(),
        addMarker: function(name, address) {
            geocoder.geocode({ 'address': address }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var infowindow = new google.maps.InfoWindow({
                            content: name
                        });
                    var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                            title: name
                        });
                    marker.address = address;
                    viewModel.markers.push(marker);
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });

        },
        newName: ko.observable(),
        newAddress: ko.observable(),
        addNewAddress: function() {
            this.addMarker(this.newName(), this.newAddress());
            this.newName("");
            this.newAddress("");
        }
    };
    ko.applyBindings(viewModel);

    initialize();
});