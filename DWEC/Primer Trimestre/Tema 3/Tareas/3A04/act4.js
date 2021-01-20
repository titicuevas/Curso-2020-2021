function welcomeMessage() {
    var now = new Date();
    var hour = now.getHours();
    if (hour > 6 && hour < 12) {
        alert("Buenos días!!");
    } else if (hour > 12 && hour < 20) {
        alert("Buenas tardes!!");
    } else {
        alert("Buenas noches!!");
    }
}
welcomeMessage();
