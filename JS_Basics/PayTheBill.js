function whosPaying(names) {

    var numofppl = names.length;
    var randompos = Math.floor(Math.random() * numofppl);
    var randomperson = names[randompos];

    return randomperson+" is going to buy lunch today!";
}