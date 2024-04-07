// Setting Vars
var MAX_RIDETYPES = 98;

// Global Vars
var rideID = -1;
var rideType = -1;
var colourScheme = -1;
var visibilityOption = 0;
var heightoffset = 0;
var chainOption = 0;

var changeType = false;
var changeHeight = false;
var changeVisibility = false;
var changeChain = false;

// Enums
var colourSchemes = [
    "All colour schemes",
    "Main colour scheme",
    "Alternative colour scheme 1",
    "Alternative colour scheme 2",
    "Alternative colour scheme 3"
]

var visibilityOptions = [
    "Visible",
    "Invisible"
]

var chainOptions = [
    "No chainlift",
    "Has chainlift"
]

var rideTypes = create_ridetype_list();

function create_ridetype_list() {
    var rideTypeList = [];

    for (var r = 0; r <= MAX_RIDETYPES; r++) {
        rideTypeList.push({
            "name": get_ridetype_name(r),
            "id": (r)
        });
    }

    var sortedRideTypeList = rideTypeList.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    return sortedRideTypeList;
}

function get_ridetype_name(ridetype) {
    ridetype = ridetype + 2 //This is to make it match up with the string ID's
    switch (ridetype) {
        case 02: return "Spiral Roller Coaster"
            break;
        case 03: return "Stand-up Roller Coaster"
            break;
        case 04: return "Suspended Swinging Coaster"
            break;
        case 05: return "Inverted Roller Coaster"
            break;
        case 06: return "Junior Roller Coaster"
            break;
        case 07: return "Miniature Railway"
            break;
        case 08: return "Monorail"
            break;
        case 09: return "Mini Suspended Coaster"
            break;
        case 10: return "Boat Hire"
            break;
        case 11: return "Wooden Wild Mouse"
            break;
        case 12: return "Steeplechase"
            break;
        case 13: return "Car Ride"
            break;
        case 14: return "Launched Freefall"
            break;
        case 15: return "Bobsleigh Coaster"
            break;
        case 16: return "Observation Tower"
            break;
        case 17: return "Looping Roller Coaster"
            break;
        case 18: return "Dinghy Slide"
            break;
        case 19: return "Mine Train Coaster"
            break;
        case 20: return "Chairlift"
            break;
        case 21: return "Corkscrew Roller Coaster"
            break;
        case 22: return "Maze"
            break;
        case 23: return "Spiral Slide"
            break;
        case 24: return "Go-Karts"
            break;
        case 25: return "Log Flume"
            break;
        case 26: return "River Rapids"
            break;
        case 27: return "Dodgems"
            break;
        case 28: return "Swinging Ship"
            break;
        case 29: return "Swinging Inverter Ship"
            break;
        case 30: return "Food Stall"
            break;
        case 31: return "Unknown Stall (1D)"
            break;
        case 32: return "Drink Stall"
            break;
        case 33: return "Unknown Stall (1F)"
            break;
        case 34: return "Shop"
            break;
        case 35: return "Merry-Go-Round"
            break;
        case 36: return "Unknown Stall (22)"
            break;
        case 37: return "Information Kiosk"
            break;
        case 38: return "Toilets"
            break;
        case 39: return "Ferris Wheel"
            break;
        case 40: return "Motion Simulator"
            break;
        case 41: return "3D Cinema"
            break;
        case 42: return "Top Spin"
            break;
        case 43: return "Space Rings"
            break;
        case 44: return "Reverse Freefall Coaster"
            break;
        case 45: return "Lift"
            break;
        case 46: return "Vertical Drop Roller Coaster"
            break;
        case 47: return "Cash Machine"
            break;
        case 48: return "Twist"
            break;
        case 49: return "Haunted House"
            break;
        case 50: return "First Aid Room"
            break;
        case 51: return "Circus"
            break;
        case 52: return "Ghost Train"
            break;
        case 53: return "Twister Roller Coaster"
            break;
        case 54: return "Wooden Roller Coaster"
            break;
        case 55: return "Side-Friction Roller Coaster"
            break;
        case 56: return "Steel Wild Mouse"
            break;
        case 57: return "Multi-Dimension Roller Coaster"
            break;
        case 58: return "Unknown Ride (38)"
            break;
        case 59: return "Flying Roller Coaster"
            break;
        case 60: return "Unknown Ride (3A)"
            break;
        case 61: return "Virginia Reel"
            break;
        case 62: return "Splash Boats"
            break;
        case 63: return "Mini Helicopters"
            break;
        case 64: return "Lay-down Roller Coaster"
            break;
        case 65: return "Suspended Monorail"
            break;
        case 66: return "Unknown Ride (40)"
            break;
        case 67: return "Reverser Roller Coaster"
            break;
        case 68: return "Heartline Twister Coaster"
            break;
        case 69: return "Mini Golf"
            break;
        case 70: return "Giga Coaster"
            break;
        case 71: return "Roto-Drop"
            break;
        case 72: return "Flying Saucers"
            break;
        case 73: return "Crooked House"
            break;
        case 74: return "Monorail Cycles"
            break;
        case 75: return "Compact Inverted Coaster"
            break;
        case 76: return "Water Coaster"
            break;
        case 77: return "Air Powered Vertical Coaster"
            break;
        case 78: return "Inverted Hairpin Coaster"
            break;
        case 79: return "Magic Carpet"
            break;
        case 80: return "Submarine Ride"
            break;
        case 81: return "River Rafts"
            break;
        case 82: return "Unknown Ride (50)"
            break;
        case 83: return "Enterprise"
            break;
        case 84: return "Unknown Ride (52)"
            break;
        case 85: return "Unknown Ride (53)"
            break;
        case 86: return "Unknown Ride (54)"
            break;
        case 87: return "Unknown Ride (55)"
            break;
        case 88: return "Inverted Impulse Coaster"
            break;
        case 89: return "Mini Roller Coaster"
            break;
        case 90: return "Mine Ride"
            break;
        case 91: return "Unknown Ride (59)"
            break;
        case 92: return "LIM Launched Roller Coaster"
            break;
        case 93: return "Hypercoaster"
            break;
        case 94: return "Hyper-Twister"
            break;
        case 95: return "Monster Trucks"
            break;
        case 96: return "Spinning Wild Mouse"
            break;
        case 97: return "Classic Mini Roller Coaster"
            break;
        case 98: return "Hybrid Coaster"
            break;
        case 99: return "Single Rail Roller Coaster"
            break;
        case 100: return "Alpine Coaster"
            break;
        default: return "???"
            break;
    }
}

function reset_widget_ridetype_dropdown() {
    var ridetypedropdown = ui.getWindow("Ride Editor").findWidget("ridetype_dropdown");

    for (var r = 0; r <= MAX_RIDETYPES; r++) {
        if (rideTypes[r].id == rideType) {
            ridetypedropdown.selectedIndex = (r);
            return;
        }
    }
}

function update_widget_ridetype(id) {
    var index = find_index_of_ride_with_id(id)
    update_global_ride(index);
    set_widget_ride();
    reset_widget_ridetype_dropdown();
    reset_widget_colourScheme();
    context.getParkStorage('Levis.RideEditor').set('selected_ride', id)
}

function find_index_of_ride_with_id(id) {
    for (var r = 0; r < (map.rides.length); r++) {
        if (map.rides[r].id == id) {
            return r
        }
    }
    return 0;
}

function find_last_ride_id() {
    var id = 0
    for (var r = 0; r < (map.rides.length); r++) {
        if (map.rides[r].id > id) {
            id = map.rides[r].id
        }
    }
    return id;
}

function set_widget_ride() {
    var ridebox = ui.getWindow("Ride Editor").findWidget("ride");
    var index = find_index_of_ride_with_id(rideID);
    ridebox.text = [index, map.rides[index].name].join(" - ");
}

function update_global_ride(index) {
    rideID = map.rides[index].id;
    rideType = map.rides[index].object.rideType[0];
}

function update_widget_height(widgetname, increase) {
    var heightwidget = ui.getWindow("Ride Editor").findWidget(widgetname);
    heightoffset = heightoffset + increase

    heightwidget.text = (heightoffset / 2).toFixed(1) + "  Units"
}

function reset_widget_colourScheme() {
    var colourdropdown = ui.getWindow("Ride Editor").findWidget("colour_dropdown");

    colourdropdown.selectedIndex = 0;
}

function get_last_selection() {
    var index = context.getParkStorage('Levis.RideEditor').get('selected_ride')
    if (index == null) {
        return -1
    }
    if (index > map.rides.length) {
        return -1
    }
    return index
}

function find_rideType() {
    for (var r = 0; r < rideTypes.length; r++) {
        if (rideTypes[r].id == rideType) {
            return r
        }
    }

    return -1
}

function validate_selection() {
    if (rideID == -1) {
        ui.showError("Ride Editor Error:", "Select a ride first.")
        return false;
    }

    if (!changeType && !changeVisibility && !changeHeight && !changeChain) {
        ui.showError("Ride Editor Error:", "Select at least one option to change.")
        return false;
    }
    return true;
}

function inverse_boolean(boolean) {
    if (boolean) {
        return false;
    }
    return true;
}

var change_ride = function () {
    // Iterate every tile in the
    if (rideID >= 0) {
        for (var y = 0; y < map.size.y; y++) {
            for (var x = 0; x < map.size.x; x++) {
                var tile = map.getTile(x, y);

                // Iterate every element on the tile
                for (var i = 0; i < tile.numElements; i++) {
                    var element = tile.getElement(i);

                    if (element.type === 'track') {
                        if (element.ride == rideID) {
                            if (colourScheme == -1 || colourScheme == element.colourScheme) {

                                if (changeHeight) {
                                    element.baseHeight = element.baseHeight + heightoffset;
                                }

                                if (changeVisibility) {
                                    switch (visibilityOption) {
                                        case 0: element.isHidden = false;
                                            break;
                                        case 1: element.isHidden = true;
                                            break;
                                        default: element.isHidden = element.isHidden;
                                            break;
                                    }
                                }

                                if (changeChain) {
                                    switch (chainOption) {
                                        case 0: element.hasChainLift = false;
                                            break;
                                        case 1: element.hasChainLift = true;
                                            break;
                                        default: element.hasChainLift = element.hasChainLift;
                                            break;
                                    }
                                }

                                if (changeType) {
                                    element.rideType = rideType;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function rides_window() {
    widgets = []
    // Ride Selection
    widgets.push({
        type: 'groupbox',
        name: 'box1',
        x: 5,
        y: 20,
        width: 290,
        height: 65,
        text: "Select Ride"
    });

    widgets.push({
        type: "textbox",
        name: "ride",
        isDisabled: true,
        x: 10,
        y: 35,
        width: 190,
        height: 15,
        text: ""
    });

    widgets.push({
        type: "button",
        name: "nextride",
        x: 205,
        y: 35,
        width: 25,
        height: 25,
        border: true,
        image: "arrow_up",
        tooltip: "go to the next ride",
        onClick: function onClick() {
            update_widget_ridetype(rideID + 1);
        }
    });

    widgets.push({
        type: "button",
        name: "prevride",
        x: 235,
        y: 35,
        width: 25,
        height: 25,
        border: true,
        image: "arrow_down",
        tooltip: "go to the previous ride",
        onClick: function onClick() {
            if (rideID == 0) {
                update_widget_ridetype(find_last_ride_id());
            }
            else {
                update_widget_ridetype(rideID - 1);
            }
        }
    });

    widgets.push({
        type: "button",
        name: "selectride",
        x: 265,
        y: 35,
        width: 25,
        height: 25,
        border: true,
        image: 5187,
        tooltip: "select a ride",
        onClick: function onClick() {
            ride_select_window()
        }
    });

    widgets.push({
        type: "dropdown",
        name: "colour_dropdown",
        x: 10,
        y: 65,
        width: 280,
        height: 15,
        items: colourSchemes,
        selectedIndex: 0,
        onChange: function onChange(e) {
            colourScheme = (e - 1);
        }
    });

    // Edit
    widgets.push({
        type: 'groupbox',
        name: 'box2',
        x: 5,
        y: 95,
        width: 290,
        height: 125,
        text: "Edit Ride"
    });
    widgets.push({
        type: 'label',
        name: 'label2',
        x: 10,
        y: 110,
        width: 290,
        height: 65,
        text: "Apply selected change"
    });

    // Edit - Ride Type
    widgets.push({
        type: 'checkbox',
        name: 'edit_ridetype',
        x: 10,
        y: 125,
        width: 15,
        height: 15,
        isChecked: changeType,
        text: "Ride Type",
        onChange: function onChange(e) {
            changeType = inverse_boolean(changeType)
        }
    });
    widgets.push({
        type: "dropdown",
        name: "ridetype_dropdown",
        x: 90,
        y: 125,
        width: 200,
        height: 15,
        items: rideTypes.map(function (ridetype) {
            return ridetype.name;
        }),
        selectedIndex: find_rideType(),
        onChange: function onChange(e) {
            rideType = rideTypes[e].id;
        }
    });

    // Edit - Visbility
    widgets.push({
        type: 'checkbox',
        name: 'edit_visibility',
        x: 10,
        y: 150,
        width: 15,
        height: 15,
        isChecked: changeVisibility,
        text: "Visibilty",
        onChange: function onChange(e) {
            changeVisibility = inverse_boolean(changeVisibility);
        }
    });
    widgets.push({
        type: "dropdown",
        name: "visibility_dropdown",
        x: 90,
        y: 150,
        width: 100,
        height: 15,
        items: visibilityOptions,
        selectedIndex: 0,
        onChange: function onChange(e) {
            visibilityOption = e;
        }
    });

    // Edit - Chainlift
    widgets.push({
        type: 'checkbox',
        name: 'edit_chain',
        x: 10,
        y: 175,
        width: 15,
        height: 15,
        isChecked: changeChain,
        text: "Chainlift",
        onChange: function onChange(e) {
            changeChain = inverse_boolean(changeChain);
        }
    });
    widgets.push({
        type: "dropdown",
        name: "chain_dropdown",
        x: 90,
        y: 175,
        width: 100,
        height: 15,
        items: chainOptions,
        selectedIndex: 0,
        onChange: function onChange(e) {
            chainOption = e;
        }
    });

    // Edit - Height
    widgets.push({
        type: 'checkbox',
        name: 'edit_height',
        x: 10,
        y: 200,
        width: 15,
        height: 15,
        isChecked: changeHeight,
        text: "Height",
        onChange: function onChange(e) {
            changeHeight = inverse_boolean(changeHeight)
        }
    });
    widgets.push({
        type: "spinner",
        name: "height_spinner",
        x: 90,
        y: 200,
        width: 100,
        height: 15,
        text: "0.0  Units",
        onDecrement: function onDecrement(e) {
            update_widget_height("height_spinner", -1)
        },
        onIncrement: function onIncrement(e) {
            update_widget_height("height_spinner", 1)
        }
    });

    //Apply Button
    widgets.push({
        type: 'button',
        name: "apply-button",
        x: 70,
        y: 230,
        width: 160,
        height: 20,
        text: "Apply selected changes",
        onClick: function onClick() {
            if (validate_selection()) {
                change_ride();
            }
        }
    });

    window = ui.openWindow({
        classification: 'Ride Editor',
        title: "Ride Editor 2.3 (by Levis)",
        width: 300,
        height: 255,
        x: 20,
        y: 50,
        colours: [24, 24],
        widgets: widgets
    });
}

function ride_select_window() {
    widgets = []
    // Columns for list
    var columns = [
        {
            canSort: true,
            header: "ride",
            ratioWidth: 9
        },
        {
            canSort: true,
            header: "id",
            ratioWidth: 1,
            sortOrder: "ascending"
        }
    ]

    // Ride Selection
    widgets.push({
        type: 'label',
        name: 'Explain',
        x: 5,
        y: 20,
        width: 175,
        height: 15,
        text: "Click the column headers to sort"
    });

    widgets.push({
        type: 'listview',
        name: 'list_rides',
        x: 5,
        y: 35,
        width: 195,
        height: 215,
        scrollbars: "vertical",
        isStriped: false,
        showColumnHeaders: true,
        columns: columns,
        items: map.rides.map(function (ride) {
            return [ride.name, ""+ride.id];
        }),
        selectedCell: 0,
        canSelect: false,
        onClick: function onClick(item, column) {
            update_widget_ridetype(map.rides[item].id);
        }
    });

    window = ui.openWindow({
        classification: 'Select Ride',
        title: "Select the ride you want to edit",
        width: 200,
        height: 255,
        x: 350,
        y: 50,
        colours: [24, 24], //12
        widgets: widgets
    });
}

var main = function () {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("Ride Editor", function () {
        rides_window();
        // Update the last selected ride
        update_widget_ridetype(get_last_selection());
    });
};

registerPlugin({
    name: 'Ride Editor',
    version: '2.3',
    authors: ['AutoSysOps (Levis)'],
    type: 'remote',
    licence: 'MIT',
    targetApiVersion: 34,
    main: main
});