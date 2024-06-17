let aiInfo;

function getInfo () { //gets the set info from the ai
    return aiInfo;
}

function setInfo (info) { // sets the info about the ai, ai info can be memory, name, character etc.
    aiInfo = info;
}

module.exports = { getInfo, setInfo }