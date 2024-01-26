const legit = document.getElementById("legit");
const cheat = document.getElementById("cheat");
const start = document.getElementById("start");
const second = document.getElementById("second");
const round = document.getElementById("round");


let legitPlayers;
let cheaters;

const cheatAssumeNum = 25;

let playerInfo;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000))
}

async function simulate(rounds, speed) {
    legitPlayers = 0;
    cheaters = 0;
    playerInfo = [];

    for(let i = 0; i < rounds; i++) {
        await delay(speed);
        const number = Math.floor(Math.random() * 2);
        
        if(number == 0) {
             playerInfo.push(false);
        } else {
            playerInfo.push(true);
        }
    }
    
    for(let i = 0; i < playerInfo.length; i++) {
        if(playerInfo[i]) {
            cheaters += 1;
        } else {
            legitPlayers += 1;
        }
    }
    
    legit.textContent = legitPlayers;
    cheat.textContent = cheaters;
    
    console.log(`LegitPlayers: ${legitPlayers}\nCheaters: ${cheaters}`);
}


async function startup(rounds, speed) {
    await simulate(rounds, speed);
}

start.addEventListener("click", () => {
    legit.textContent = 0;
    cheat.textContent = 0;

    startup(round.value, second.value);
})