window.onload = () => {
    // const urlSearchParams = new URLSearchParams(window.location.search);
    // const params = Object.fromEntries(urlSearchParams.entries());
    // document.getElementById('betselector_home').key = params.key;
    // document.getElementById('betselector_away').key = params.key;
    // document.getElementById('playmap').key = params.key;
    // document.getElementById('markethistory').key = params.key;
    // document.getElementById('scoreline').key = params.key;
    // document.getElementById('gameclock').key = params.key;
};
function onBetSelected(betId, optionId, odds, subOptionId, player) {
    currentodds = odds;
    currentBetId = betId;
    currentOptionId = optionId;
    currentSubOptionId = subOptionId;
    checkSelections();
};
function onBetUnselected(betId, optionId, odds, subOptionId, player) {
    if (currentodds == odds && currentBetId == betId && currentOptionId == optionId && currentSubOptionId == subOptionId) {
        currentodds = null;
        currentBetId = null;
        currentOptionId = null;
        currentSubOptionId = null;
    }
    checkSelections();
};
document.getElementById('betselector_home').onBetSelected = (betId, optionId, odds, subOptionId, player) => {
    console.log("Home bet selected");
    onBetSelected(betId, optionId, odds, subOptionId, player);
    document.getElementById('betselector_away').unselect();
}
document.getElementById('betselector_home').onBetUnselected = onBetUnselected;
document.getElementById('betselector_away').onBetSelected = (betId, optionId, odds, subOptionId, player) => {
    console.log("Away bet selected");
    onBetSelected(betId, optionId, odds, subOptionId, player);
    document.getElementById('betselector_home').unselect();
}
document.getElementById('betselector_away').onBetUnselected = onBetUnselected;
let currentwager = '$2';
let currentodds = null;
let loading = false;
function checkSelections() {
    if (currentwager && currentodds) {
        document.getElementById('submitbutton').style.color = 'white';
        let wager = parseInt(currentwager.substring(1));
        let odds = parseFloat(currentodds);
        let winnings = Math.round(wager * odds * 100) / 100;
        document.getElementById('submitbutton').innerText = 'Submit Bet ($' + winnings + ')';
    } else {
        document.getElementById('submitbutton').style.color = "rgba(255,255,255,0.5)";
        document.getElementById('submitbutton').innerText = 'Submit';
    }
}

let wagerbuttons = document.getElementsByClassName('wagerbutton');
for (let i = 0; i < wagerbuttons.length; i++){
    wagerbuttons[i].onclick = () => {
        currentwager = wagerbuttons[i].innerText;
        checkSelections();
        for (let j = 0; j < wagerbuttons.length; j++) {
            wagerbuttons[j].style.backgroundColor = '#fdf2b3';
        }
        wagerbuttons[i].style.backgroundColor = '#fbde40';
    };
    wagerbuttons[0].style.backgroundColor = '#fbde40';
}

function timeout(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep() {
await timeout(500);
return;
}

async function submitBet() {
    if (currentodds && currentwager && !loading) {
        loading = true;
        let button = document.getElementById('submitbutton');
        button.style.color = "rgba(255,255,255,0.5)";
        button.innerText = "Submitting.";
        await sleep();
        button.innerText = "Submitting..";
        await sleep();
        button.innerText = "Submitting...";
        await sleep();
        button.innerText = "Submitting.";
        await sleep();
        button.innerText = "Submitting..";
        await sleep();
        button.innerText = "Submitting...";
        await sleep();
        button.innerText = "Submitted!";
        button.style.color = "white";
        await sleep();
        await sleep();
        await sleep();
        await sleep();
        button.style.color = "rgba(255,255,255,0.5)";
        button.innerText = 'Submit';
        currentodds = null;
        currentwager = null;
        loading = false;
    }
}

async function startSimulation() {
    let button = document.getElementById("startbutton");
    button.style.color = "rgba(255,255,255,0.5)";
    button.innerText = "Starting...";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://dev.api.gameplai.io/demo?key=LtlmVESdrRzHdMM3xD3x", true);
    xhttp.send(null);
    await sleep();
    await sleep();
    await sleep();
    await sleep();
    button.style.color = "white";
    button.innerText = "Start Game";
}