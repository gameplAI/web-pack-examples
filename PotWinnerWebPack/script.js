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
        document.getElementById('submitbutton').innerText = 'Submit Bet ($' + winnings + ')';
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
        button.innerText = 'Submit';
        currentodds = null;
        currentwager = null;
        loading = false;
    }
}