window.onload = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    document.getElementById('betselector').key = params.key;
};
document.getElementById('betselector').onBetSelected = (betId, optionId, odds, subOptionId, player) => {
    currentodds = odds;
    checkSelections();
}; 
let currentwager = '$2';
let currentodds = null;
let loading = false;
function checkSelections() {
    if (currentwager && currentodds) {
        document.getElementById('submitbutton').style.color = 'white';
        let wager = parseInt(currentwager.substring(1));
        let odds = parseFloat(currentodds);
        let winnings = Math.round(wager * odds * 100) / 100;
        document.getElementById('winnings').innerText = '$' + winnings;
    }
}

let wagerbuttons = document.getElementsByClassName('wagerbutton');
for (let i = 0; i < wagerbuttons.length; i++){
    wagerbuttons[i].onclick = () => {
        currentwager = wagerbuttons[i].innerText;
        checkSelections();
        for (let j = 0; j < wagerbuttons.length; j++) {
            wagerbuttons[j].style.background = '#293142';
        }
        wagerbuttons[i].style.background = '#B16AF7';
    };
    wagerbuttons[0].style.background = '#B16AF7';
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
        button.style.backgroundColor = "#b5b138";
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
        button.style.backgroundColor = "#4bba3a";
        await sleep();
        await sleep();
        await sleep();
        await sleep();
        button.style.backgroundColor = "black";
        button.innerText = 'Submit';
        currentodds = null;
        currentwager = null;
        loading = false;
    }
}