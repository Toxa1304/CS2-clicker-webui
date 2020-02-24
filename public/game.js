
// Change "test" to any username you'd like to start a new game
var username = "test";

var socket = io.connect("https://tictactoe.info/", {transports: ['websocket']});
setupSocket();


function setupSocket() {

    // This function is called whenever a new game state is received from the server
    socket.on('gameState', function (jsonGameState) {
        console.log(jsonGameState);
        data = JSON.parse(jsonGameState)

        document.getElementById("Gold").innerHTML = "Your gold is:  " + data["gold"]
        document.getElementById("Username").innerHTML = "Hello " + data["username"] + "!"

        document.getElementById("numberOfShovels").innerHTML = "You have: " + data["equipment"]["shovel"]["numberOwned"]
        document.getElementById("numberOfExcavators").innerHTML = "You have: " + data["equipment"]["excavator"]["numberOwned"]
        document.getElementById("numberOfMines").innerHTML = "You have: " + data["equipment"]["mine"]["numberOwned"]

        document.getElementById("shovelCost").innerHTML = "Shovel Costs: " + data["equipment"]["shovel"]["cost"]
        document.getElementById("excavatorCost").innerHTML = "Excavator Costs: " + data["equipment"]["excavator"]["cost"]
        document.getElementById("mineCost").innerHTML = "Mine Costs: " + data["equipment"]["mine"]["cost"]
        // TODO: Display the game state on your GUI
        // You must display: current gold, and the name, number owned, and cost for each type of equipment

    });
}


function initializeGame() {
    socket.emit("register", username);
    elem = document.getElementById("asd")
    elem.innerHTML = "asdasdasd"
    // TODO: Add any initialization code you'd like to setup your GUI
    // This function is called once when the page loads

}


// Call this function whenever the user clicks your gold button
function clickGold() {
    socket.emit("clickGold");
}


// Call this function whenever the user clicks to purchase equipment
// The parameter is the id of the equipment type to purchase
function buyEquipment(equipmentID) {
    socket.emit("buy", equipmentID);
}
