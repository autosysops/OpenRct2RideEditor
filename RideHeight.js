// Global Vars
var rideID = -1;

var change_ride_height = function (offset) {
    // Iterate every tile in the map
    if (rideID >= 0) {
        for (var y = 0; y < map.size.y; y++) {
            for (var x = 0; x < map.size.x; x++) {
                var tile = map.getTile(x, y);

                // Iterate every element on the tile
                for (var i = 0; i < tile.numElements; i++) {
                    var element = tile.getElement(i);

                    if (element.type === 'track') {
                        if (element.ride == rideID) {
                            element.baseHeight = element.baseHeight + offset;
                        }
                    }
                }
            }
        }
    }
}

function rides_window() {
    widgets = []
    widgets.push({
        type: 'label',
        name: 'label-description',
        x: 3,
        y: 20,
        width: 300,
        height: 60,
        text: "Select the ride you want to raise/lower"
    });
    widgets.push({
        type: "dropdown",
        x: 5,
        y: 45,
        width: 210,
        height: 15,
        name: "filter_dropdown",
        text: "",
        items: map.rides.map(function (ride) {
            return [ride.id, ride.name].join(" - ");
        }),
        selectedIndex: -1,
        onChange: function onChange(e) {
            rideID = e;
        }
    });
    widgets.push({
        type: 'button',
        name: "move-ride-up",
        x: 5,
        y: 70,
        width: 90,
        height: 15,
        text: "Height +1",
        onClick: function onClick() {
            change_ride_height(1);
        }
    });
    widgets.push({
        type: 'button',
        name: "move-ride-down",
        x: 110,
        y: 70,
        width: 90,
        height: 15,
        text: "Height -1",
        onClick: function onClick() {
            change_ride_height(-1);
        }
    });
    window = ui.openWindow({
        classification: 'Ride Height Changer',
        title: "Ride Height",
        width: 220,
        height: 100,
        x: 20,
        y: 50,
        colours: [24, 24],
        widgets: widgets
    });
}

var main = function () {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("Ride Height", function () {
        rides_window();
    });
};

registerPlugin({
    name: 'Ride Height',
    version: '1.0',
    authors: ['AutoSysOps (Levis)'],
    type: 'remote',
    main: main
});